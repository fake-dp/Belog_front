# 도커 이미지를 생성할 base 이미지를 선택합니다.
FROM node:latest

# 작업 디렉토리를 설정합니다.
WORKDIR /app

# 호스트 컴퓨터의 현재 디렉토리에 있는 모든 파일을 도커 컨테이너의 /app 디렉토리에 복사합니다.
COPY . /app

# 애플리케이션 빌드
# RUN npm run build

# 컨테이너가 시작되었을 때 실행할 명령어를 설정합니다.
CMD ["npm", "start"]