# Using container
FROM node:14
# Working Directory
WORKDIR /usr/src/app
# Copy package and app to root directory of the container
COPY package*.json app.js ./
# Run command
RUN npm install
# Port
EXPOSE 3000
# Run CMD Command node app.js
CMD ["node", "app.js"]