#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time : 2023/2/1 10:13
# @Author : zxiaosi
# @desc : 路由日志记录器
import time
from datetime import datetime
from typing import Callable
from urllib.parse import parse_qsl

from fastapi.routing import APIRoute
from redis_om import NotFoundError
from starlette.requests import Request
from starlette.responses import Response

from models import RequestIp
from utils.custom_log import my_logger
from utils.custom_exc import DuplicateRequests


# 详见: https://fastapi.tiangolo.com/advanced/custom-request-and-route/#custom-apiroute-class-in-a-router


class LogRoute(APIRoute):
    def get_route_handler(self) -> Callable:
        original_route_handler = super().get_route_handler()

        async def custom_route_handler(request: Request) -> Response:
            prevent_duplicate_requests(request)

            before = time.time()
            response: Response = await original_route_handler(request)
            duration = time.time() - before
            response.headers["X-Response-Time"] = str(duration)

            # 可以在这里将日志保存到数据库
            request_params = await get_request_params(request)
            current_time = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
            my_logger.info("访问记录: url:{}, method:{}, params:{}, ip:{}, spend_time:{}, create_date:{}.".format(
                request.url, request.method, request_params, request.client.host, duration, current_time))

            return response

        return custom_route_handler


async def get_request_params(request: Request) -> dict:
    """ 获取请求参数 """
    params: dict = {}  # 存储结果

    path_params = request.get("path_params")  # 路径参数
    if path_params:
        params.update(path_params)

    query_string = request.get("query_string")
    if query_string:
        query_params = parse_qsl(str(query_string, "utf-8"))  # 查询参数
        params.update(query_params)

    methods = ["POST", "PUT", "PATCH"]
    content_type = request.headers.get("content-type")
    if request.method in methods and "application/json" in content_type:
        body_params = await request.json()  # 请求体参数
        params.update(body_params)

    return params


def prevent_duplicate_requests(request: Request):
    """ 防止重复请求 (3秒内请求5次) """
    key = f"{request.client.host}+{request.get('path')}"
    try:
        request_obj = RequestIp.get(key)
        if request_obj.num >= 5:
            raise DuplicateRequests()
        else:
            request_ip = RequestIp(num=request_obj.num + 1, pk=key)
            request_ip.update()
    except NotFoundError:
        request_ip = RequestIp(num=1, pk=key)
        request_ip.save()
        request_ip.expire(3)