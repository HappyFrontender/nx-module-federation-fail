# Nx Module Federation Example with Angular & NGRX Signals

This repository demonstrates a complete Nx monorepo setup showcasing Module Federation with Angular and NGRX Signals.

## 🎯 Features

- ✅ **Nx 22.3.3** - Latest Nx monorepo tooling
- ✅ **Angular 21.1.0** - Latest Angular framework
- ✅ **NGRX Signals 21.0.1** - Modern state management with signals
- ✅ **Module Federation with Webpack** - Micro-frontend architecture
- ✅ **Two Lazy-Loaded Angular Libraries** - Demonstrating code splitting and lazy loading
- ✅ **No Nx Cloud** - Pure local development setup

## 📁 Project Structure

```
nx-module-federation-fail/
├── apps/
│   ├── host/              # Module Federation host application
│   └── remote/            # Module Federation remote application
└── libs/
    ├── feature-a/         # Counter & List Manager with NGRX Signals
    └── feature-b/         # User & Messages with NGRX Signals
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

```bash
npm install
```

### Running the Application

Start the host application (which will automatically start the remote):

```bash
npx nx serve host
```

The application will be available at:
- **Host**: http://localhost:4200
- **Remote**: http://localhost:4202 (served automatically)

## 🎨 Features Demonstration

### Feature A - Counter & List Manager

Located at `/remote/feature-a`, this feature demonstrates:
- **NGRX Signal Store** for state management
- Counter with increment/decrement functionality
- Dynamic list management (add/remove items)
- Real-time UI updates using signals

### Feature B - User & Messages

Located at `/remote/feature-b`, this feature demonstrates:
- **NGRX Signal Store** for user state
- User name management
- Active/inactive status toggle
- Message list management with add/clear functionality

## ��️ Build

Build all applications:

```bash
npx nx build host
```

This will build both the host and remote applications.

## 📝 Key Technologies

### Module Federation

The project uses Webpack Module Federation to create a micro-frontend architecture where:
- **Host** application loads and orchestrates remote modules
- **Remote** application exposes routes that can be lazy-loaded
- Libraries are shared between applications to reduce bundle size

### NGRX Signals

Both feature libraries use NGRX Signals for state management:
- `signalStore()` - Create a signal-based store
- `withState()` - Define initial state
- `withMethods()` - Define actions/methods
- `patchState()` - Update state immutably

### Angular Standalone Components

All components use the new standalone component API:
- No NgModules required
- Direct imports in component metadata
- Better tree-shaking and smaller bundles

## 🎯 Purpose

This repository serves as a minimal example to demonstrate the integration of:
1. Nx monorepo tooling (22.3.3)
2. Angular with Module Federation (21.1.0)
3. NGRX Signals for state management (21.0.1)
4. Lazy-loaded library architecture

Perfect for understanding potential issues or best practices when combining these technologies.

## 📸 Screenshots

### Remote Application Home
The main remote application entry point showing navigation to both features.

### Feature A - Counter & List Manager
Interactive counter and list management powered by NGRX Signals.

### Feature B - User & Messages
User state management and message handling with NGRX Signals.

## 📄 License

MIT
