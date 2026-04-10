# Project 1
> A web app for selling items and promoting events locally.
> This is a multi-page React application

## Table of Contents
- [Project Overview](#project-overview)
- [Build](#build)
- [Tech Stack](#tech-stack)
- [Development Tools](#development-tools)
- [Installation & Setup](#installation--setup)
- [Workflow](#workflow)
- [Extending the Project](#extending-the-project)
- [Testing](#testing)
- [Architecture](#architecture)
- [Contribution Guidelines](#contribution-guidelines)
- [Design Decisions](#design-decisions)
- [Known Bugs](#known-bugs)

## Project Overview

This app allows users to:
- Buy and sell items locally through the **Shop** page
- Create and browse **community event posts**
- Upload images to listings and posts via Cloudinary
- save community events to Google Calendar, Apple Calendar, and Outlook
- Sign up and log in using Firebase Authentication
- Create listings that are stored in a **Firestore database**

  The project was developed as part of ESOF 423 and demonstrates
integration of modern web development tools including React,
Firebase, Cloudinary, and component-based UI design

## Build

The current deployed version of the application can be accessed here:

https://csci423project1.netlify.app/

The build is automatically deployed through Netlify when updates are pushed to the main GitHub branch.

## Tech Stack
- Frontend: React with MUI, Tailwind CSS
- Build Tool: Vite
- Routing: React Router v6
- State Management: React Hooks
- Authentication: Firebase Authentication
- Database: Firebase Firestore
- Image Storage: Cloudinary
- Deployment: Netlify

## Development Tools

**IDE**
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) -- Primary edidtor
- [Visual Studio Code](https://code.visualstudio.com/) -- recommended alternative for development

 **Frameworks & Libraries**
- [React](https://react.dev/) — frontend framework
- [Material UI (MUI)](https://mui.com/) — component library
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS
- [Vite](https://vitejs.dev/) — build tool and dev server
- [React Router v6](https://reactrouter.com/) — client-side routing
- [Firebase](https://firebase.google.com/) — authentication and Firestore database
- [Cloudinary](https://cloudinary.com/) — image upload and hosting
- [MUI X Date Pickers](https://mui.com/x/react-date-pickers/) — date selection components
- [Day.js](https://day.js.org/) — date formatting and manipulation

**Utilities**
- [npm](https://www.npmjs.com/) — package manager
- [Git](https://git-scm.com/) — version control
- [GitHub](https://github.com/423S26/project1) — repository hosting and pull request management
- [Netlify](https://www.netlify.com/) — hosting and continuous deployment


## Installation & Setup
Make sure the following are installed on your machine before starting:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- 
1. Clone the repo:
```bash
git clone https://github.com/423S26/project1.git
```
2. Navigate to project folder
```bash
cd project1
```
3. Install dependencies
```bash
npm install
```
4. Firebase and Cloudianry are already configured in `src`. No additional setup is required for development unless you are creating a new project.
   
5. Run project
```bash
npm run dev
```
- Opens at http://localhost:5173 by default
- Default landing page: Home page with nav and points of interest

## Workflow

### Branching
- `main` — production branch, auto-deploys to Netlify on every push
- Feature branches should be named descriptively, e.g. `feat/image-upload` or `fix/cors-error`

### Pull Requests
1. Create a new branch from `main` for your feature or fix
2. Make and test your changes locally
3. Push your branch and open a pull request on GitHub
4. Request a review from a team member before merging
5. Squash and merge into `main` once approved

### Issue Tracking
- Issues are tracked via [GitHub Issues](https://github.com/423S26/project1/issues)
- Clearly state what the issue is, where it may occur, and the steps taken to fix

## Extending the Project

### Adding a New Page
1. Create a new file in `src/pages/`, e.g. `src/pages/NewPage.jsx`
2. Add a route in `src/App.jsx`:
```jsx
} />
```
3. Add a navigation link in `src/components/nav.jsx` using the existing `NavItem` component

### Adding a New Firestore Collection
1. Define the collection name as a constant
2. Use `collection(db, 'collectionName')` with Firebase's `addDoc` / `getDocs` as used in `Shop.jsx` and `Community.jsx`
3. Request update to Firestore rules in the Firebase Console if needed


### Modifying the Theme
- Global MUI theme settings are in `src/components/shared-theme/`
- Color primitives (sage, peach, lavender, etc.) are defined in `themePrimitives.js` and can be imported into any component


## Testing
Small automated tests designed through Playwright and stored in `src/Tests`

Testing has also been conducted via:
- **Manual white-box testing** during development
- **Local testing** using the Vite development server
- **Live testing** on the deployed Netlify build to verify production behavior
- **User testing** with a small group of users to validate UI flow and usability


## Architecture

```
src/
 ├─ components/       # Reusable UI elements
 │   ├─ navItem.jsx   # Reusable nav link component
 │   ├─ nav.jsx       # Top navigation bar
 │   ├─ Popup.jsx     # Reusable modal/popup component
 │   ├─ RequireAuth/  # Restricts actions to authenticated users
 │   ├─ sign-in/      # Firebase sign-in form
 │   ├─ sign-up/      # Firebase sign-up form with validation
 │   └─ shared-theme/ # MUI theme and color primitives
 ├─ pages/            # Page-level components
 │   ├─ Home.jsx
 │   ├─ Shop.jsx
 │   ├─ Community.jsx
 │   ├─ Contact.jsx
 │   ├─ Documentation.jsx
 │   ├─ SignUp.jsx
 │   └─ SignIn.jsx
 ├─ firebase.js       # Firebase configuration and initialization
 ├─ App.jsx           # Root component with routing
 ├─ index.css         # Tailwind imports
 └─ index.jsx         # Entry point
public/
 └─ _redirects        # Netlify routing fix for React Router
index.html            # Vite HTML entry
vite.config.js        # Vite configuration
.env                  # Local environment variables (not committed to Git)
```



## Contribution Guidelines
1. Create a new branch for any feature or bug fix
2. Follow consistent React component structure
3. Test changes locally before committing
4. Use descriptive commit messages
5. Submit a pull request for review before merging into `main`
6. Do not commit `.env` files or API keys to the repository

## Design Decisions
- **Vite** was chosen for its fast development server and build times over Create React App
- **Tailwind CSS** was used for fast, utility-first styling
- **MUI** was used for pre-built accessible components and consistent theming
- **Firebase** was selected to simplify backend development — it provides authentication and a managed NoSQL database without needing a custom server
- **Cloudinary** was selected for image storage as a free alternative to Firebase Storage, which requires a paid Blaze plan
- **React Router** handles all client-side routing; a `_redirects` file in `public/` ensures Netlify serves `index.html` for all routes
- **NavItem.jsx** was created as a reusable component to simplify `nav.jsx` and make adding new links easier


## Known Bugs
- The search bar on the Shop and Community pages is not currently functional. Users can use the Sort By dropdown as a workaround
 
  
# Authors
Developed by:

Sylvia Hutzler and Kaylee Wood

Course:

ESOF 423

Semester:

Spring 2026
