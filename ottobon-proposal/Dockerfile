# Stage 1: Build the React application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
# We copy only package files first to leverage Docker layer caching
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the app for production (outputs to /app/dist)
RUN npm run build

# Stage 2: Serve the app using Node.js 'serve'
FROM node:20-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy the build output from the builder stage
COPY --from=builder /app/dist ./dist

# Expose port 3000 to the outside once the container has launched
EXPOSE 3000

# Start serve
CMD ["serve", "-s", "dist", "-l", "3000"]
