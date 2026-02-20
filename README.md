# Project 1
> A web app for selling items and promoting events locally.
> This is a multi-page React application

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Architecture](#architecture)
- [Contribution Guidelines](#contribution-guidelines)
- [Design Decisions](#design-decisions)

## Project Overview
Use this link to visit site: https://csci423project1.netlify.app/

This app allows users to:
- Buy and sell items within the community
- Promote and express interest in events

## Tech Stack
- Frontend: React with MUI, Tailwind CSS
- Build Tool: Vite
- Routing: React Router v6
- State Management: 
- Backend: Firebase (Authentication, Firestore Database)

Firebase is a BaaS used to simplify auth, storage, and database management

MUI is a component library used for faster UI development. Supports responsive design and theming
 

## Installation & Setup
1. Clone the repo:
```bash
git clone <repo-url>
```
2. Navigate to project folder
```bash
cd project1
```
3. Install dependencies
```bash
npm install
```
4. Run project
```bash
npm start
```
- Opens localhost
- Default landing page: Home page with nav and popular items

## Testing
No current automated tests

## Architecture

```
src/
 ├─ components/   # Reusable UI elements like Button, Nav, NavItem, Footer
    ├─ sign-in      # Integrates Firebase authentication
    ├─ sign-up      # Handles input validation and Firebase account creation
    ├─ shared-theme # Generalized theme integration for MUI components
 ├─ pages/        # Page-level components: Home, Shop, Community 
 ├─ App.jsx       # Root component with routing
 ├─index.css      # Tailwind imports
 └─ index.jsx     # Entry point
index.html        # Vite HTML entry
vite.config.js    # Vite configuration
```

NavItem.jsx was created to allow reusable navigation links and simplify Nav.jsx.
This improves scalability if additional links are added.



## Contribution Guidelines

## Design Decisions
- Tailwind for fast, responsive styling
- React Context for simple state management
- React MUI and Firebase for faster development
- Routing handled by React Router
- Vite for fast development server and build


# Authors
Developed by:

Sylvia Hutzler and Kaylee Wood

Course:

ESOF 423

Semester:

Spring 2026
