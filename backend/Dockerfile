FROM python:3.11

# 工作路径
WORKDIR /code

# 方便下面使用缓存加载
COPY ./requirements.txt /code/requirements.txt

# 使用缓存下载安装包
#RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# 使用缓存下载安装包(镜像)
RUN pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --default-timeout=1000 --no-cache-dir --upgrade -r /code/requirements.txt

COPY . /code/
