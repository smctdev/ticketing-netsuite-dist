# Use an official Node.js image to install serve
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install 'serve' globally
RUN npm install -g serve

# Copy the build output (dist folder) into the container
COPY ./dist /app/dist

# Expose port 7000 for serve
EXPOSE 7000

# Run the serve command to serve the static files from the dist folder
CMD ["serve", "-s", "dist", "-l", "7000"]
