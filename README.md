# Proba Academy

A modern learning platform built with React and TypeScript, designed to provide an interactive educational experience with AI-powered assistance.

## 🚀 Features

### 📚 Curriculum Module

- **Interactive Learning Grid**: Browse through organized curriculum units and subunits
- **Combined Learning Experience**: Seamless navigation between different learning materials
- **Progress Tracking**: Monitor your learning journey through various educational content
- **Responsive Design**: Optimized for all devices and screen sizes

### 🤖 AI Assistant Module

- **Intelligent Chat Interface**: Get instant help and answers to your questions
- **Context-Aware Responses**: AI assistant that understands your learning context
- **Real-time Interaction**: Smooth and responsive chat experience

### 🌐 Internationalization

- **Multi-language Support**: Built-in i18n support with Spanish as the primary language
- **Extensible Translation System**: Easy to add new languages and translations

## 🛠️ Technologies

### Core Technologies

- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.1** - Fast build tool and development server

### UI & Styling

- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Accessible and unstyled UI primitives
- **Lucide React** - Beautiful and consistent icon library

### State Management & Data Fetching

- **TanStack Query 5.56.2** - Powerful data synchronization for React
- **React Hook Form 7.53.0** - Performant forms with easy validation
- **Zod 3.23.8** - TypeScript-first schema validation

### Routing & Navigation

- **React Router DOM 6.26.2** - Declarative routing for React

## 🏗️ Architecture

### MVP (Model-View-Presenter) Architecture

The project follows the MVP architectural pattern for clean separation of concerns:

```
src/modules/[moduleName]/
├── ModuleNameInitialize.ts         # Module initialization
├── core/                           # Business logic (Model)
│   ├── entities/                   # Data types and interfaces
│   ├── gateway/                    # Data access interfaces
│   ├── presentation/               # Presenter interfaces
│   ├── screens/                    # Screen interfaces
│   └── actions/                    # Use cases and business logic
├── infrastructure/                 # Concrete implementations (Presenter)
│   ├── gateway/                    # Gateway implementations
│   └── presentation/               # Presenter implementations
└── screens/                        # UI components (View)
```

### Atomic Design Component Structure

Components are organized following Atomic Design principles:

```
src/components/
├── atoms/                          # Basic building blocks
├── molecules/                      # Simple component combinations
├── organisms/                      # Complex UI sections
└── templates/                      # Page layouts
```

### Key Architectural Features

- **Functional Programming**: Pure functions, immutability, and composition
- **Type Safety**: Full TypeScript implementation
- **Modular Design**: Independent modules with clear boundaries
- **Separation of Concerns**: Clear distinction between business logic and UI

## 📋 Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: For cloning the repository

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pao95/proba-spark-academy.git
   cd proba-spark-academy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
