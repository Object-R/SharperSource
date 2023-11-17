FROM ubuntu:22.04
LABEL MAINTAINER="Ray id_xray@tom.com"

WORKDIR /root
COPY sources.list /etc/apt/
COPY front-end ./front-end
COPY back-end ./back-end
RUN apt update -y \
    && apt upgrade -y \
    && apt install -y vim curl sudo openssh-server supervisor gcc g++ make \
    && curl -sL https://deb.nodesource.com/setup_18.x | sudo bash - \
    && apt install -y nodejs \
    && apt update -y \
    && apt upgrade -y \
    && npm config set registry https://registry.npm.taobao.org \
    && npm i -g vue @vue/cli \
    && ln -s /usr/bin/python3 /usr/bin/python \
    && apt install -y python3-pip \
    && pip install -r /root/back-end/requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
COPY global_front.conf /etc/supervisor/conf.d/
COPY global_back.conf /etc/supervisor/conf.d/
WORKDIR /root/front-end/
RUN npm install

CMD service supervisor start
