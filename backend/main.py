#!/usr/bin/env python3
# _*_ coding: utf-8 _*_
# @Time : 2021/9/19 22:04
# @Author : 小四先生
# @desc : 主函数
import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from api.api_v1.api import api_router
from core.config import settings, logger
from db import init_db
from initial_data import sqlalchemy_orm_initial, sqlalchemy_core_initial

# 配置接口文档信息
app = FastAPI(
    title=settings.PROJECT_NAME,
    description=settings.PROJECT_DESCRIPTION,
    version=settings.PROJECT_VERSION
)

app.include_router(api_router, prefix=settings.API_V1_STR)

# 设置所有CORS(跨域请求)
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

if __name__ == '__main__':
    # 日志初始化
    logger.info("日志初始化成功！！！")

    # 创建所有表
    init_db()

    # 两种初始化表数据的方式 (只能插入一次)
    # sqlalchemy_orm_initial()  # 速度略慢,性能正常
    sqlalchemy_core_initial()  # 速度与性能并行

    uvicorn.run(app='main:app', host="127.0.0.1", port=8000)
