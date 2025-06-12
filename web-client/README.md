# IncodeKanban Web Client

Web application for managing Kanban boards, built with React and TypeScript.

## Technologies & Architecture

### Core Technologies

- **Framework**: React 19 with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: PaperCSS with custom components
- **HTTP Client**: Axios for API requests
- **Icons**: React Feather Icons
- **Build Tool**: Vite
- **Linting/Formatting**: ESLint + Prettier

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── card/          # Card component
│   ├── kanban/        # Kanban board components
│   ├── notification/  # Notification system
│   └── ui/            # Base UI components
│
├── features/         # Feature modules
│   ├── board/         # Board management
│   ├── cards/         # Card management
│   └── notify/        # Notification logic
│
└── store/            # Redux store configuration
    ├── hooks.ts       # Custom hooks
    └── store.ts       # Store setup
```

### Core Concepts
```
feature-name/
├── index.ts              # Public API exports
├── types.ts              # TypeScript types and interfaces
├── feature.slice.ts      # Redux slice with actions and reducers
├── feature.service.ts    # API service layer
├── feature.selectors.ts  # Memoized selectors
├── hooks.ts              # Custom React hooks
```
