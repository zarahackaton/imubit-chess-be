FROM node:13.8-slim
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"]
