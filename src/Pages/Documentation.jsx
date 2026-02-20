function Documentation() {
    return (
        <div className= "pl-20">
            <p className= "text-2xl font-bold text-center"> Project Overview </p>
            <p className= "text-lg font-medium"> This app allows users to: </p>
            <p> Buy and sell items within the community
                Promote and express interest in events </p>
            <p className= "text-lg font-medium"> Tech Stack</p>
            <p> Frontend: React , Tailwind CSS<br />
                Build Tool: Vite<br />
                Routing: React Router v6<br />
                State Management:<br />
                Optional Backend: </p>
            <p className= "text-lg font-medium"> Installation & Setup</p>
            <p> 1. Clone the repo:</p>
            <p> git clone repo-url </p>
            <p> 2. Navigate to project folder </p>
            <p> cd project1 </p>
            <p> 3. Install dependencies </p>
            <p> npm install </p>
            <p> 4. Run project </p>
            <p> npm start</p>
            <p> Opens localhost<br />
                Default landing page: Home page with nav and popular items
            </p>
            <p className= "text-lg font-medium"> Testing </p>
            <p> No current automated tests </p>
            <p className= "text-lg font-medium"> Architecture </p>
            <p> src/<br />
                ├─ components/   # Reusable UI elements like Button, Nav, NavItem, Footer<br />
                ├─ pages/        # Page-level components: Home, Shop, Community<br />
                ├─ App.jsx       # Root component with routing<br />
                ├─index.css      # Tailwind imports<br />
                └─ index.jsx     # Entry point<br />
                index.html        # Vite HTML entry<br />
                vite.config.js    # Vite configuration<br />
                tailwind.config.js# Tailwind configuration<br />
                postcss.config.js # PostCSS config </p>
            <p> NavItem.jsx was created to allow reusable navigation links and simplify Nav.jsx. This improves scalability if additional links are added. </p>
            <p className= "text-lg font-medium"> Contribution Guidelines </p>
            <p className= "text-lg font-medium"> Design Decisions </p>
            <p> Tailwind for fast, responsive styling<br />
                React Context for simple state management<br />
                Routing handled by React Router<br />
                Vite for fast development server and build </p>
            <p className= "text-lg font-medium"> Authors </p>
            <p> Developed by:<br />

                Sylvia Hutzler and Kaylee Wood </p>
            <p> Course:<br />

                ESOF 423 </p>
            <p> Semester:<br />

                Spring 2026</p>



        </div>
    )
}

export default Documentation;