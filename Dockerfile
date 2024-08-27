FROM node:22-alpine


WORKDIR /app/client

COPY package*.json .


RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn" ,"run", "dev"]
