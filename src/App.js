import UML_diagram from './Images/UML diagram Asian Art.png';

function App() {
    return(
        <div>
            <h1>1. Info about the product: It's purpose, features, key technologies (languages, tools, frameworks)</h1>
            <p>1. The purpose of our project is to help small businesses and create community specifically within the
            scope of the Bozeman Asian Community. We will be using React and a variety of tools and frameworks that have
            yet to be solidified.
            </p>
            <h1>2. Provide UML diagram/s -- this can be done at a high level and modified later, but at the least
                provide a visual plan for the important development pieces</h1>
            <div>
            <img src={UML_diagram} alt="" />
            </div>
            <h1>1.	Description: what it does; why unique; why wanted </h1>
            <p>1.	An app that connects people in the Asian community through a marketplace based social media. It is unique because it focuses on small businesses and one community. It is wanted increase connections between people with similar interests.</p>
            <h1>2.	How to obtain and install software </h1>
            <p>TBD</p>
            <h1>3.	How to run (start) the software</h1>
            <p>Github Pages</p>
            <h1>5.	How to report a bug (who should someone notify and how)</h1>
            <p>Email sylviahutzler21@gmail.com and kayleewood66@gmail.com with specific information about the bug.</p>
        </div>

    );
}

export default App;
