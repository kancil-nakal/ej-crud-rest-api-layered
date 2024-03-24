# Basic CRUD REST API using Layered Architecture with ExpressJS, Prisma, and PostgreSQL

This repository contains a basic CRUD (Create, Read, Update, Delete) REST API built using ExpressJS framework, Prisma ORM, and PostgreSQL as the database. The project follows a layered architecture pattern to ensure separation of concerns and maintainability.

## Features

- Create, Read, Update, and Delete operations for a resource.
- Layered architecture for better code organization and separation of concerns.
- Uses ExpressJS framework for handling HTTP requests.
- Utilizes Prisma ORM for database interaction.
- PostgreSQL database for data storage.

## Requirements

- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kancil-nakal/ej-crud-rest-api-layered
   ```

2. Navigate to the project directory:

   ```bash
   cd ej-crud-rest-api-layered
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   This will install the following dependencies listed in `package.json`:

   - **Express**: Framework for handling HTTP requests.
   - **Prisma**: ORM for database interaction.
   - **@prisma/client**: Prisma client for generating Prisma models.
   - **dotenv**: For loading environment variables from a `.env` file.
   - **cors**: Middleware for enabling Cross-Origin Resource Sharing.

4. **Install Prisma CLI**: Prisma CLI is required for database management. Install it globally using npm:

   ```bash
   npm install -g prisma
   ```

5. **Initialize Prisma**: Initialize Prisma in your project directory by running:

   ```bash
   npx prisma init
   ```

6. **Update Database Configuration**: After initialization, configure your database connection in the `schema.prisma` file created by Prisma.

7. **Run Database Migration**: Create database tables by running migration:

   ```bash
   npx prisma migrate dev --name init
   ```

8. **Generate Prisma Client**: Generate Prisma client by running:

   ```bash
   npx prisma generate
   ```

9. Start the server:

   ```bash
   nodemon .
   ```

10. The server should now be running locally on port `3000` by default.

## Usage

- Use a tool like Postman or cURL to send HTTP requests to the API endpoints.
- The API endpoints are structured following RESTful conventions:
  - `GET /products` - Retrieve all products.
  - `GET /products/:id` - Retrieve a specific product by ID.
  - `POST /products` - Create a new product.
  - `PUT /products/:id` - Update an existing product by ID.
  - `DELETE /products/:id` - Delete a resource by ID.

## Project Structure

```
 ┣ prisma
 ┃ ┗ schema.prisma            # Prisma models and schema
 ┣ src
 ┃ ┣ db
 ┃ ┃ ┗ index.js               # Database configuration
 ┃ ┣ product
 ┃ ┃ ┣ product.controller.js  # Controllers for handling HTTP requests related to products
 ┃ ┃ ┣ product.repository.js  # Repository for database operations related to products
 ┃ ┃ ┗ product.services.js    # Business logic layer for products
 ┃ ┗ index.js                 # Entry point of the application
 ┣ .env.local                 # Environment variables configuration
 ┣ .gitignore
 ┣ package.json               # Project metadata and dependencies
 ┗ README.md                  # Project documentation

```

## Contributing

Contributions are welcome! If you find any issues or would like to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- ExpressJS
- Prisma ORM
- PostgreSQL

## Contact

For any inquiries or questions, you can reach out to [irsyadalfah@gmail.com](mailto:irsyadalfah@gmail.com).

---

Feel free to customize this README according to your project's specifics.
