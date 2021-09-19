#!/usr/bin/env python3
# _*_ coding: utf-8 _*_
# @Time : 2021/9/19 17:02
# @Author : 小四先生
# @desc : 配置文件
from pydantic import BaseSettings


class Settings(BaseSettings):
    # 接口文档的 名字
    PROJECT_NAME = "FastAPI"
    # 接口文档的 描述
    PROJECT_DESCRIPTION = "创建数据库"
    # 接口文档的 版本
    PROJECT_VERSION = "2.0"
    # 数据库链接
    SQLALCHEMY_DATABASE_URI = "sqlite:///./sql_app.db"


settings = Settings()