# IncodeKanban

> ℹ️ This project was developed as a solution to the [Test Task](https://github.com/Vladymyrdev/github-kanban-test-task).

## Quick Start

### Prerequirements
1. Start MongoDB using Docker Compose:
   ```bash
   cd rest-api
   docker compose up -d
   ```
1. Set up environment variables:
    - **Backend**: Create a `.env` file in the `rest-api` directory
    - **Frontend**: Create a `.env` file in the `web-client` directory

### Run both applications
```bash
npm run dev
```

### Access the Application

- Frontend: http://localhost:5173
- API: http://localhost:8080

## Documentation

- [API Documentation](./rest-api/README.md)
- [Frontend Documentation](./web-client/README.md)
