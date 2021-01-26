FROM node:14.5.0-alpine

ENV PORT 3000

# Install git for ui and internal packages
RUN apk add --no-cache git

# Set app directory
WORKDIR /app

# Installing dependencies (productin only)
COPY package*.json ./
# RUN npm i git+https://github.com/forbole/big-dipper-default-ui.git
# RUN npm i git+https://github.com/forbole/big-dipper-internal-ui.git
# RUN npm i
RUN npm ci

# Copying source files
COPY . .

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]
