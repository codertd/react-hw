###
# Development build
FROM node:11-alpine AS build-env

WORKDIR /src

# add `/app/node_modules/.bin` to $PATH
ENV PATH /src/node_modules/.bin:$PATH

# install dev deps in build-env
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Yes we're going to copy everything in, this is the build-env portion,
# not the prod, so it's ok to have artifacts.
COPY . .
RUN npm install

# build the client and create dist as static files for Express to serve
RUN npm run build


###
# Production build
FROM node:11-alpine AS build-prod
WORKDIR /app

# so we can exec npm run prod.
COPY --from=build-env /src/package*.json ./

# Copy in the executable code and node_modules
COPY --from=build-env /src/node_modules/ ./node_modules/

# Yes, its /src/src in dev.  Express static include paths to files for dist are ../../dist
COPY --from=build-env /src/src/server/ ./src/server/
COPY --from=build-env /src/dist/ ./dist/

# Port that Express in the container will listen on.
EXPOSE 5000

# Note there are three args in this array to match whats in package.json.
CMD [ "npm", "run", "prod" ]

