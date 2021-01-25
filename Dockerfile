FROM node:14.5.0-alpine

ENV PORT 3000

# Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
WORKDIR /app

# Installing dependencies (productin only)
COPY package*.json /app/
RUN npm install --only=prod

# Copying source files
COPY . /app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
# CMD "npm" "run" "dev"
CMD [ "npm", "start" ]
