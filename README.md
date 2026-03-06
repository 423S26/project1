# Project 1
> A web app for selling items and promoting events locally.
> This is a multi-page React application

## Table of Contents
- [Project Overview](#project-overview)
- [Build](#build)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Testing](#testing)
- [Architecture](#architecture)
- [Contribution Guidelines](#contribution-guidelines)
- [Design Decisions](#design-decisions)
- [Known Bugs](#known-bugs)

## Project Overview

This app allows users to:
- Buy and sell items locally through the **Shop** page
- Create and browse **community event posts**
- Sign up and log in using Firebase Authentication
- Create listings that are stored in a **Firestore database**

  The project was developed as part of ESOF 423 and demonstrates
integration of modern web development tools including React,
Firebase, and component-based UI design

## Build

The current deployed version of the application can be accessed here:

https://csci423project1.netlify.app/

The build is automatically deployed through Netlify when updates are pushed to the main branch.

## Tech Stack
- Frontend: React with MUI, Tailwind CSS
- Build Tool: Vite
- Routing: React Router v6
- State Management: React Hooks
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
- Default landing page: Home page with nav and points of interest

## Testing
No current automated tests, plan to implement at a later date

Current testing has been conducted via:
- **Manual white-box testing** during development
- **Local testing** using the Vite development server
- **User testing** with a small group of users to validate UI flow and usability


## Architecture

```
src/
 ├─ components/      # Reusable UI elements like Button, Nav, NavItem, Footer
    ├─ navItem.jsx
    ├─ nav.jsx
    ├─ requireAuth   # Utilizes Firebase authentication to ensure valid users are interacting
    ├─ sign-in/      # Integrates Firebase authentication
    ├─ sign-up/      # Handles input validation and Firebase account creation
    ├─ shared-theme/ # Generalized theme integration for MUI components
 ├─ pages/           # Page-level components
    ├─ home
    ├─ shop
    ├─ community
    ├─ contact
    ├─ signup
    ├─ signin
 ├─ firebase.js   # Firebase configuration
 ├─ App.jsx       # Root component with routing
 ├─index.css      # Tailwind imports
 └─ index.jsx     # Entry point
index.html        # Vite HTML entry
vite.config.js    # Vite configuration
```



## Contribution Guidelines
1. Create a new branch for any feature or bug fix
2. Follow consistent React component structure
3. Test changes locally before committing
4. Use descriptive commit messages
5. Submit a pull request for review before merging

## Design Decisions
- Tailwind for fast, responsive styling
- React Context for simple state management
- React MUI and Firebase for faster development
- Routing handled by React Router
- Vite for fast development server and build
- Firebase was selected to simplify backend development by providing authentication and a managed NoSQL database without needing to maintain a custom server.
- NavItem.jsx was created to allow reusable navigation links and simplify Nav.jsx.
This improves scalability if additional links are added.


## Known Bugs
- Refreshing the page after creating a post may produce a **"Page not found" error** due to routing issues with the hosting configuration. Navigating back to the Home page resolves the issue.
- Uploaded images may fail to appear in listings. The image upload system is still under development.
  - Image uploads are currently optional when creating a listing.
 
  
# Authors
Developed by:

Sylvia Hutzler and Kaylee Wood

Course:

ESOF 423

Semester:

Spring 2026
