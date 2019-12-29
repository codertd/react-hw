FROM node:11-alpine

WORKDIR /src

# add `/app/node_modules/.bin` to $PATH
ENV PATH /src/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

# build the client and copy dist as static files for Express to serve
RUN npm build
COPY dist ./

EXPOSE 5000

CMD [ "npm", "prod" ]
