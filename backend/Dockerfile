FROM node:14.15.4

LABEL version="1.0"
LABEL description="This is the base docker image for the Tourist Sovenir server."
LABEL maintainer = ["ray.tangent42@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 1337

CMD ["npm", "start"]