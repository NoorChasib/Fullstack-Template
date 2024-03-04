# Fullstack Template

This is a comprehensive Fullstack Docker template designed to streamline the development and deployment process for both frontend and backend applications.

## Technologies Used

### Frontend

- **Framework/Library**:
  - React
- **Development Tools**:
  - Vite
  - TypeScript
  - ESLint
  - Prettier
  - Docker

### Backend

- **Core Technologies**:
  - Express.js
  - PostgreSQL (Pg)
- **Development Tools**:
  - Nodemon
  - TypeScript
  - ESLint
  - Prettier
  - Docker

## Getting Started

Follow these instructions to set up the project locally for development and testing purposes.

### Prerequisites

Ensure you have Docker installed on your machine. For other prerequisites, refer to the specific sections below.

### Setup Instructions

To fully set up the project, it is HIGHLY recommended you follow the detailed step-by-step guide available in the [Project Wiki](https://github.com/NoorChasib/Fullstack-Template/wiki). The Wiki includes comprehensive instructions on:

- Setting up a VPS
- Setting up a domain for the VPS
- Setting the project up locally
- Setting the project up on Github
- Setting the project up on the VPS
- Finalizing deployment of the project

For a quick start, follow these steps:

1. **Use the template**: Click `Use this template` to create your own repo.

2. **Clone the Repository**: Clone the project to your local machine.
   ```bash
   git clone [URL to the repository]
   ```
3. **Navigate to the Project Directory**: Change into the project directory.
   ```bash
   cd [repository name]
   ```
4. **Environment Configuration**: Copy the `.env.template` file to `.env` and customize it with your settings.
   ```bash
   cp .env.template .env
   ```
5. **Database Configuration**: Rename `src/db/pgadmin/servers.json.template` to `servers.json` and edit it with your database settings.
   ```bash
   cd src/db/pgadmin
   cp servers.json.template servers.json
   ```

### Docker Configuration

- Navigate to the `compose.(dev/prod).yaml` file and adjust settings as necessary to fit your project requirements.

### Running the Project

Utilize Docker for an easier development and deployment process. Here are some commands provided in `package.json`:

- **Initialize Project**: Install all necessary packages.
  ```bash
  npm run init
  ```
- **Build and Start Docker Containers**:
  ```bash
  npm run dev:up
  ```
- **Stop Docker Containers**:
  ```bash
  npm run dev:down
  ```
- **Rebuild and Restart Docker Containers**:
  ```bash
  npm run dev:rebuild
  ```
- **Remove Docker Containers**:
  ```bash
  npm run dev:prune
  ```

Refer to the `scripts` section in `package.json` for additional Docker commands.

### Conclusion

This boilerplate is crafted to kickstart your projects efficiently. You are encouraged to modify and adapt it to meet your specific needs. For detailed setup and configuration instructions, please visit the [Project Wiki](https://github.com/NoorChasib/Fullstack-Template/wiki).
