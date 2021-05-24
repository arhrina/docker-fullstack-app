# 빌드 파일을 통해 nginx 서버를 통한 run


# Nginx가 제공할 build 파일들을 생성
FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build


# Nginx를 가동하고 생성된 빌드 파일들을 제공
FROM nginx
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# default.conf에서 해준 설정을 nginx 컨테이너 안에 있는 설정에 복사

COPY --from=builder /app/build /usr/share/nginx/html