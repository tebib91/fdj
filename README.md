# Football App

This project is a football application built with Angular for the frontend and Node.js for the backend. It provides features related to football data using APIs and MongoDB as the database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally
- MongoDB installed (or PostgreSQL if preferred)

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

### Running the Application

Start the db:

```bash
cd db
docker compose up --build
```

To restore data to mongo run commande inside mongoDb container:

```bash
cd mongo-dump
 mongorestore --authenticationDatabase=admin --db fdj --username fdj --password fdj .
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

### Deployment

To deploy the application in production, follow these steps:

Build the Angular application:

```bash
Copy code
cd client
ng build --prod
```

##### Deploy the built frontend files located in the client/dist directory to your preferred hosting provider.

##### Set up and deploy the backend Node.js application. Ensure that environment variables are correctly configured for production.

##### Built With

Angular - Frontend framework
Node.js - Backend framework
MongoDB - Database

### Authors

Tabib Ahmed
