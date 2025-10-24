# ========================
# Stage 1: Development
# ========================
# Use NestJS CLI image for hot reload / development
FROM node:20-alpine

# Set working directory
WORKDIR /server

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose app port
EXPOSE 3000

# For development
CMD ["npm", "run", "start:dev"]