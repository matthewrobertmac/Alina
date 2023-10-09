# Use an official Node runtime as a parent image. Use a newer version of Node.
FROM node:16-slim

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
# First, copying package.json and yarn.lock (or package-lock.json) for better caching
COPY package*.json ./
COPY yarn.lock ./

# Install any needed packages using yarn or npm
# Preferably using yarn when yarn.lock is available
RUN if [ -f "yarn.lock" ]; then yarn install --frozen-lockfile; else npm install; fi

# Copy everything else
COPY . ./

# Define environment variable for creating production build
ENV NODE_ENV production

# At runtime, we'll use the PORT environment variable provided by Cloud Run
CMD ["sh", "-c", "npm start -- -p $PORT"]
