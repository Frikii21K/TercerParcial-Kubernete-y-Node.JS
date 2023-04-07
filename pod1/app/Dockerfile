FROM node:latest
WORKDIR /app
COPY  package.json ./
RUN npm i
COPY indexpod1.js /app/
EXPOSE 2000
CMD [ "node", "indexpod1.js" ]