# Use the official MongoDB image as the base image
FROM mongo:4.4.29

# Set the working directory inside the container
WORKDIR /mongo-dump

# Copy the MongoDB dump files into the container
COPY . /mongo-dump/

# Run mongorestore command to restore the MongoDB dump during container initialization
