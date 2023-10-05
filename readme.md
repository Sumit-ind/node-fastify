# Node-Fastify

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Note](#note)

## Introduction

This repository contains the code for [Node-Fastify], a Node.js application built with Fastify and Mongoose. It serves as a guide for setting up and running the application on your local environment.

## Prerequisites

Ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sumit-ind/node-fastify.git

2. **Install dependencies:**

   ```bash
   cd your-repo 
   npm install

## Configuration

1. **Update the Database URI:**

      Open the `.env` file and replace `MONGO_DB_URI` with your MongoDB database URI.

   ```bash
   MONGO_DB_URI=your_mongodb_uri

2. **Update the JWT Secret:**

      Open the `.env` file and replace `JWT_SECRET` with your desired JWT secret.

   ```bash
   JWT_SECRET=your_jwt_secret

## Usage

1. **Run the application:**

   ```bash
   npm start
   ```

   The application will be running at <http://localhost:5500>.

2. **Feel free to update/add APIs:**

      Customize and extend the APIs as needed for your project. Refer to the code and make the necessary modifications.

## Contributing

If you'd like to contribute to this project, please do that

## License

This project is licensed under the MIT License.

## Note

You can find more information about fastify hooks and request lifecycle on [Lifecycle](https://zen-kalam-f6e81f.netlify.app/docs/v1.2.x/lifecycle/).