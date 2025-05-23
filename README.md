# 🚀 Copilot Certification Study Project

This repository is a study project created to prepare for the **GitHub Copilot certification**. It demonstrates a modern **React** application using **TypeScript** and **Vite**, with a focus on best practices, component structure, form validation, pagination, and automated testing.

## 🧾 Project Overview

The application includes:

* ⚛️ **React** for building the user interface
* 🟦 **TypeScript** for static typing and safer code
* ⚡ **Vite** as the build tool for fast development and HMR
* 🧭 **React Router DOM** for client-side routing
* 🧪 **Testing Library** and **Vitest** for unit and integration testing
* 🧹 **ESLint** for code linting and quality
* ✅ **Jest DOM** for improved test assertions

### ✨ Features

* 📝 **Register Page**
  A registration form with real-time validation for username/email and Brazilian mobile numbers.

* 👥 **Employees Page**
  Displays a paginated table of mock employee data.

* 🔢 **Pagination Component**
  Custom pagination with navigation and page selection.

* 🧪 **Automated Tests**
  Tests for form validation and UI rendering using Testing Library and Vitest.

## 📁 Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Pagination.tsx
│   ├── data/
│   │   └── employeeMockData.ts
│   ├── pages/
│   │   ├── Employees.tsx
│   │   └── Register.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── router.tsx
│   ├── Register.test.tsx
│   └── ...
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── README.md
└── ...
```

## ⚙️ Getting Started

### 🔧 Prerequisites

* 🟢 Node.js (v18+ recommended)
* 📦 npm

### 📥 Installation

```bash
npm install
```

### ▶️ Running the Development Server

```bash
npm run dev
```

### 🧪 Running Tests

```bash
npm test
```

### 📦 Building for Production

```bash
npm run build
```

## 🧰 Technologies Used

* [⚛️ React](https://react.dev/)
* [🟦 TypeScript](https://www.typescriptlang.org/)
* [⚡ Vite](https://vitejs.dev/)
* [🧭 React Router DOM](https://reactrouter.com/)
* [🧪 Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [🧪 Vitest](https://vitest.dev/)
* [🧹 ESLint](https://eslint.org/)
* [✅ Jest DOM](https://github.com/testing-library/jest-dom)

## 🎯 Purpose

This project is intended for study and practice in preparation for the **GitHub Copilot certification**, exploring Copilot's capabilities in a real-world React + TypeScript environment.
