FROM node:14.5.0-alpine

ENV PORT 3000

# Install git for ui and internal packages
RUN apk add --no-cache git
# RUN apk update
# RUN apk get git
# Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
WORKDIR /app

# Installing dependencies (productin only)
# COPY package*.json /app/
COPY package*.json ./
RUN npm i

# Copying source files
# COPY . /app
COPY . .

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
# CMD "npm" "run" "dev"
CMD [ "npm", "start" ]
