# Project Name

Provide a brief description of what your project does.

## Technologies Used

### Frontend

- **Framework/Library**:

  - React (v18.2.0)

- **Development Tools**:

  - Vite (v5.0.5)
  - TypeScript (v5.3.2)
  - ESLint (v8.55.0)
  - Prettier (v3.1.0)

### Backend

- **Core Technologies**:

  - Node.js (v20.10.0)
  - Express.js (v4.18.2)

- **Development Tools**:

  - TypeScript (v5.3.2)
  - Nodemon (v3.0.2)
  - ESLint (v8.55.0)
  - Prettier (v3.1.0)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

List things you need to install the software and how to install them.

### Installing

A step by step series of examples that tell you how to get a development environment running.

#### Step 1: Clone the Repository

To get started, clone the repository to your local machine.

```bash
git clone [URL to the repository]
```

#### Step 2: Navigate to the root directory of the project

```bash
cd [repository name]
```

#### Step 3: Copy the .env.template file and rename it to .env.

Edit .env file with your environment-specific settings

```bash
cp .env.template .env
```

#### Step 4: Rename pgadmin/servers.json.template to servers.json.template

Edit servers.json file with your environment-specific settings

```bash
cp servers.json.template servers.json
```

### Configuring Docker

1. Navigate to the compose.yaml file.

2. Make any required changes in the compose.yaml file to suit your needs.

### Running the Project with Docker

The project uses Docker to simplify development and deployment. Below are some of the scripts available in package.json to run Docker commands.

- To build and start the Docker images:

```bash
npm run up
```

- To stop the Docker images:

```bash
npm run down
```

- To stop and remove the Docker images:

```bash
npm run prune
```

- To stop, remove, rebuild and start the Docker images:

```bash
npm run rebuild
```

For more Docker-related commands, refer to the `scripts` section in the `package.json`.

### Conclusion

This boilerplate is designed to give you a head start in your projects. Feel free to modify and adapt it as per your requirements.
