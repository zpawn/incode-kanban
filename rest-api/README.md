# IncodeKanban REST API

A RESTful API for managing Kanban boards and cards.

## Base URL

All API endpoints are prefixed with `/api/v1`.

## API Endpoints

### Health Check

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET    | /ping    | Checks if the API is running | - | |

### Boards

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET    | /boards  | Retrieves all boards | - | Array of board objects |
| POST   | /boards  | Creates a new board | `{ "title": "..." }` | Created board object |
| GET    | /boards/:id | Retrieves a specific board by ID | - | Board object |
| PUT    | /boards/:id | Updates a specific board | `{ "title": "..." }` | Updated board object |
| DELETE | /boards/:id | Deletes a specific board | - | Success message |

### Cards

| Method | Endpoint | Description | Request Body | Query Params | Response |
|--------|----------|-------------|--------------|--------------|----------|
| GET    | /cards   | Retrieves all cards for a specific board | - | `boardId` (required) | Array of card objects |
| POST   | /cards   | Creates a new card | `{ "title": "...", "description": "...", "status": "...", "board": "..." }` | - | Created card object |
| GET    | /cards/:id | Retrieves a specific card by ID | - | - | Card object |
| PATCH  | /cards/:id | Updates a specific card | Same as POST /cards (all fields optional) | - | Updated card object |
| DELETE | /cards/:id | Deletes a specific card | - | - | Success message |
| POST   | /cards/:id/move | Moves a card to a different status | `{ "status": "..." }` | - | Updated card object |

## Technologies & Architecture

### Core Technologies

- **Runtime**: Node.js
- **Language**: TypeScript
- **Web Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM

### Project Structure

```
src/
├── config/           # Configuration files
├── controllers/      # Request handlers
├── loaders/          # Application startup scripts
├── models/           # Database models and TypeScript interfaces
├── routes/           # API route definitions
└── server.ts         # Application entry point
```
