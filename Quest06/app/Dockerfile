FROM node:12

# 앱 디렉터리 생성
WORKDIR /usr/src/app
RUN npm install
# 파일 추가
COPY . .            

EXPOSE 8080
CMD [ "node", "main.js" ]