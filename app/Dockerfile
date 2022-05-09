FROM node:14
RUN mkdir /opt/app
WORKDIR /opt/app
COPY app.js package.json package-lock.json ./
RUN npm install
ENTRYPOINT ["node", "app.js"]