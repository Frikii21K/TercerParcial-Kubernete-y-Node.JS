FROM node:latest
WORKDIR /app
COPY  package.json ./
RUN npm i
COPY indexpod2.js /app/
EXPOSE 2012
CMD [ "node", "indexpod2.js" ]