import { useNavigate } from 'react-router-dom';
import { sage, peach, lavender, tan, pink } from '../components/shared-theme/themePrimitives';

function Documentation() {
    const navigate = useNavigate();
    return (
        <div style={{ color: sage[500] }} className="flex max-w-6xl mx-auto py-10">
            <div className="w-64 pr-8 border-r">
              <h2 className="accent-section font-semibold mb-4">Documentation</h2>

              <ul className=" main-section space-y-3 text-sm">
                <li><a href="#overview" className="hover:text-purple-600">Overview</a></li>
                <li><a href="#features" className="hover:text-purple-600">Features</a></li>
                <li><a href="#unique" className="hover:text-purple-600">Why It's Unique</a></li>
                <li><a href="#access" className="hover:text-purple-600">Accessing the Software</a></li>
                <li><a href="#tutorial" className="hover:text-purple-600">Using Features</a></li>
                <li><a href="#issues" className="hover:text-purple-600">Known Issues</a></li>
                <li><a href="#requirements" className="hover:text-purple-600">Requirements</a></li>
                <li><a href="#devdocs" className="hover:text-purple-600">Development Docs</a></li>
              </ul>
            </div>

            <div  className="flex-1 pl-10 space-y-10">
                <section id="overview">
                <h1 className="accent-section text-3xl font-bold mb-3 font-SatisfyR" > Asian Art App - User Documentation  </h1>

                    <p className= "main-section text-gray-700 leading-relaxed"> The <strong>Asian Art App</strong> is a web-based platform that allows users
                        to explore and engage with Asian culture through an interactive
                        and modern interface.<br /> Users can create accounts, securely sign in,
                        and navigate through different sections of the platform
                        including Shop and Community events pages </p>
                </section>

                <section id="features">
                    <h2 className="accent-section text-xl font-semibold mb-2"> Application features:</h2>
                    <ul className="main-section list-disc ml-6 space-y-1 text-gray-700">
                        <li> Secure user authentication (Sign Up / Sign In)</li>
                        <li> Responsive design for desktop devices</li>
                        <li> A clean, themed user interface built with Material UI</li>
                        <li> Deployed live access via Netlify</li>
                    </ul>
                </section>

                <section id="unique">
                    <h2 className="accent-section text-xl font-semibold mb-2"> Why the application is unique:</h2>
                    <ul className="main-section list-disc ml-6 space-y-1 text-gray-700">
                        <li> It focuses specifically on Asian culture</li>
                        <li> It is built with modern frontend technologies</li>
                        <li> It uses simple, focused designs</li>
                        <li>  </li>
                    </ul>

                    <h2 className=" accent-section text-xl font-semibold mb-2"> This software is valuable because it:</h2>
                    <ul className="main-section list-disc ml-6 space-y-1 text-gray-700">
                        <li> Provides an accessible digital space for appreciating Asian art</li>
                        <li> Encourages community interaction and cultural awareness</li>
                        <li> Offers a clean and intuitive user experience</li>
                    </ul>
                </section>

                <section id="access">
                    <h2 className="accent-section text-xl font-semibold mb-2"> How to access the Software: </h2>
                    <p className= "main-section text-gray-700 leading-relaxed"> The application is hosted online via Netlify </p>
                    <p className= "main-section text-gray-700 leading-relaxed"> Users can access the application directly through their web browser </p>
                    <p className= "main-section text-gray-700 leading-relaxed"> No installation is required</p>
                </section>

                <section id="tutorial">
                   <h2 className="accent-section text-xl font-semibold mb-2"> Using the App: </h2>
                   <p className= "main-section text-gray-700 leading-relaxed"> Users can view and create product and event listings only after signing in to the app</p>
                   <p className= "main-section text-gray-700 leading-relaxed"> Simply click on a post to view details, contact sellers, and save events </p>
                   <p className= "main-section text-gray-700 leading-relaxed"> <strong>Users can only delete posts that they own.</strong> A delete button will appear when signed in to the account that created the listing</p>
                   <p className= "main-section text-gray-700 leading-relaxed"> Contacting a seller and getting updates about an event are done through a users email </p>
                </section>

                <section id="issues">
                    <h2 className="accent-section text-xl font-semibold mb-2"> Known Issues </h2>
                    <p className= "main-section text-gray-700 leading-relaxed">Listed are bugs we already know and are working to fix:</p>
                    <ul className="main-section list-disc ml-6 space-y-1 text-gray-700">
                        <li> Refreshing the page after creating a post may produce a "Page not found" error, users can navigate back to the home page to resolve the error </li>
                        <li> Uploaded images may fail to appear in posts, this feature is still in development and currently optional </li>
                    </ul>
                </section>

                <section id="requirements">
                    <h2 className="accent-section text-xl font-semibold mb-2"> Requirements </h2>
                    <p className= "main-section text-gray-700 leading-relaxed"> Internet connection</p>
                    <p className= "main-section text-gray-700 leading-relaxed"> Modern web browser</p>
                </section>

                <section id="devdocs">
                <h2 className="accent-section text-xl font-semibold mb-2"> If you want to look into Development Documentation</h2>
                <p className= "main-section text-gray-700 leading-relaxed"> please follow <a href="https://github.com/423S26/project1/blob/main/README.md" target="_blank" rel="noopener noreferrer"
                                     style={{
                                         color: '#8B9D83',
                                         textDecoration: 'underline',
                                         fontWeight: 500,
                                     }}> this link</a> to get started</p>
                </section>
            </div>


    </div>
    );
}

export default Documentation;