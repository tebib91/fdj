# Football App

This project is a football application built with Angular for the frontend and Node.js for the backend. It provides features related to football data using APIs and MongoDB as the database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally
- MongoDB installed (or PostgreSQL if preferred)
- Docker and Docker Compose installed for running the application in containers

### Installing

Clone the repository:

```bash
git clone https://github.com/tebib91/fdj.git
cd fdj
```

Install dependencies for the backend and frontend:

```bash
cd api
npm install

cd ../client
npm install
```

### Configuration

Create a .env file in the api directory and configure your environment variables. You can use the provided .env.example file as a template.

### Running the Application with Docker

To launch the entire application stack using Docker, which includes setting up the MongoDB database, backend, and frontend:

```bash
cd fdj
docker compose up --build
```

To restore data to MongoDB, run the following command inside the MongoDB container:

```bash
docker exec -it <container-id> bash
cd mongo-dump
mongorestore --authenticationDatabase=admin --db fdj --username fdj --password fdj .
```

### Running the Application Classically

Start the database:

```bash
cd db
docker compose up --build
```

Start the backend server:

```bash
cd api
npm start
```

Start the frontend development server:

```bash
cd client
ng serve
```

#### The frontend should now be accessible at http://localhost:4200/.

##### Built With

Angular - Frontend framework
Node.js - Backend framework
MongoDB - Database
Docker - Containerization

### Authors

Tabib Ahmed

# Potential Improvements

## Scalability and Performance

1. Caching: Implement Redis for session management and caching frequently queried data.

2. Load Balancing: Utilize NGINX or another load balancer to distribute incoming API requests across multiple server instances.

3. Database Optimization: Use MongoDB's indexing and sharding features to improve query performance and data partitioning.

## Security Enhancements

1. Environment Variables: Secure sensitive information using environment variables and avoid hard-coding credentials.

2. HTTPS: Configure SSL/TLS to secure data in transit.

3. Authentication and Authorization: Implement more robust authentication mechanisms using JWTs or OAuth.

## Development and Production Environments

1.Note that the current configuration is for development purposes. For production:

    1.1 Configure different environment variables for production.

    1.2 Use managed services for databases and other backend services for better reliability and security.

## Continuous Integration and Deployment

Set up CI/CD pipelines using tools like Jenkins, GitHub Actions, or GitLab CI to automate testing and deployment processes.

## Monitoring and Logging

Implement monitoring solutions like Prometheus and Grafana to track application performance and system health.
Use centralized logging with tools such as ELK Stack for easier debugging and monitoring.

## Documentation Updates

Regularly update the README to reflect changes in technology and setup procedures.
