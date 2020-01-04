# react-hw
A React/Express client/server bundle

### Based the boilerplate https://github.com/crsandeep/simple-react-full-stack


## Features

### Client and Server code
Under /src, there are both client and server directories.  Client is a React app, while Server contains an express api.
I've added a React Router (v5) to enable basic routing to sub-components from App.js.

### Unit tests via Jest
Jest has been configured to mock css and binary assets.  SetupTests.js is performing various setup of modules.  Package.json has "test" and "testAll" commands that run tests locally with a watch, or without a watch so a branch can run all tests and report errors to fail the pipeline.

### Eslint
Husky has been setup in package.json to lint on a commit.  Lint also run in the pipeline.


### Dockerize
The Dockerfile uses a multi-stage build to setup and build, then copy the production code into place for execution.

# To build (with a Dockerfile.dev, for example)
# docker build -f Dockerfile.dev -t sample:dev .

# To Spin up and exec a shell to inspect the FS
# docker run -it sample:dev sh

# To spin it up and test it.
# docker run -p 5000:5000 sample:dev
