# Dockerfile for frontend service

# Accept build argument for Node version
ARG NODE_VERSION

# Use the Node.js image with the specified version
FROM node:${NODE_VERSION}

# Set the working directory inside the container
WORKDIR /usr/src/app/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the frontend code
COPY . .

# Expose the port the app runs on
EXPOSE 9000

# Command to run the app
CMD [ "npm", "run", "dev" ]
