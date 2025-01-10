# Use a Node.js base image
FROM node:23.1-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install dependencies (only production dependencies for efficiency)
RUN npm install --only=production

# Copy the rest of the application code into the container
COPY . .

# Expose the application's port
EXPOSE 5000

# Start the application using the correct CMD
CMD ["npm", "start"]
