FROM node:10.13.0-alpine

RUN apk add --no-cache python py-pip

RUN pip install awscli

RUN aws --version   # Just to make sure its installed alright


# Env
ENV DB_URI "http://localhost:8000"

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .

# Install all Packages
RUN npm install

# Copy all other source code to work directory
ADD docker /usr/src/app

# # # TypeScript
# RUN npm  start:dev

# Start
CMD [ "npm", "run", "start:dev" ]

EXPOSE 3000
