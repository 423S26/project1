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
                <li><a href="#tutorial" className="hover:text-purple-600">Using The App</a></li>
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
                    <p className= "main-section text-gray-700 leading-relaxed">
                        This app is accessible to anyone, however, creating listings and interacting with posts requires use of an account
                        </p>
                </section>

                <section id="features">
                    <h2 className="accent-section text-xl font-semibold mb-2"> Application features:</h2>
                    <ul className="main-section list-disc ml-6 space-y-1 text-gray-700">
                        <li> Secure user authentication (Sign Up / Sign In)</li>
                        <li> Shop page for buying and selling art and goods </li>
                        <li> Community page for posting and discovering local events</li>
                        <li> direct seller contact via email</li>
                        <li> Save events to Google Calendar, Apple Calendar, or Outlook</li>
                        <li> delete your own posts at any time</li>
                        <li> Responsive design for desktop devices</li>
                        <li> A clean, themed user interface built with Material UI</li>
                        <li> Deployed live access via Netlify0 no installation required</li>
                    </ul>
                </section>

                <section id="unique">
                    <h2 className="accent-section text-xl font-semibold mb-2"> Why the application is unique:</h2>
                    <ul className="main-section list-disc ml-6 space-y-1 text-gray-700">
                        <li> It focuses specifically on Asian art and culture</li>
                        <li> combined marketplace and community event platform in one place</li>
                        <li> It is built with modern frontend technologies</li>
                        <li> It uses simple, focused designs, prioritizing ease of use</li>
                        <li>  </li>
                    </ul>

                    <h2 className=" accent-section text-xl font-semibold mb-2"> Why it's valuable:</h2>
                    <ul className="main-section list-disc ml-6 space-y-1 text-gray-700">
                        <li> Provides an accessible digital space for appreciating Asian art</li>
                        <li> Encourages community interaction and cultural awareness</li>
                        <li> Offers a clean and intuitive user experience</li>
                    </ul>
                </section>

                <section id="access">
                    <h2 className="accent-section text-xl font-semibold mb-2"> How to access the App: </h2>
                    <p className= "main-section text-gray-700 leading-relaxed"> The application is hosted online via Netlify </p>
                    <p className= "main-section text-gray-700 leading-relaxed"> Users can access the application directly through their web browser </p>
                    <p className= "main-section text-gray-700 leading-relaxed"> No installation is required</p>
                </section>

                <section id="tutorial">
                    <h2 className="accent-section text-xl font-semibold mb-2">Using the App</h2>

                    <h3 className="accent-section text-lg font-semibold mt-4 mb-1">Creating an Account</h3>
                    <ol className="main-section list-decimal ml-6 space-y-1 text-gray-700">
                        <li>Click <strong>Sign Up</strong> in the navigation bar</li>
                        <li>Enter your information and choose a password, or sign up directly using email</li>
                        <li>Click <strong>Create Account</strong></li>
                        <li>You will be signed in automatically</li>
                    </ol>

                    <h3 className="accent-section text-lg font-semibold mt-4 mb-1">Signing In</h3>
                    <ol className="main-section list-decimal ml-6 space-y-1 text-gray-700">
                        <li>Click <strong>Sign In</strong> found as a link in the Sign Up section</li>
                        <li>Enter your registered email and password</li>
                        <li>Click <strong>Sign In</strong> to access your account</li>
                    </ol>



                    <h2 className="accent-section text-xl font-semibold mb-2">Shop Page</h2>
                    <p className="main-section text-gray-700 leading-relaxed">The Shop allows users to browse and post items for sale.</p>

                    <h3 className="accent-section text-lg font-semibold mt-4 mb-1">Browsing Listings</h3>
                    <ol className="main-section list-decimal ml-6 space-y-1 text-gray-700">
                        <li>Navigate to the <strong>Shop</strong> page from the navigation bar</li>
                        <li>Browse listings displayed as image cards</li>
                        <li>Use the <strong>Sort By</strong> dropdown to sort by newest, oldest, or price</li>
                        <li>Click any listing to view full details including description, price, and seller</li>
                    </ol>

                    <h3 className="accent-section text-lg font-semibold mt-4 mb-1">Contacting a Seller</h3>
                    <ol className="main-section list-decimal ml-6 space-y-1 text-gray-700">
                        <li>Click on a listing to open its details</li>
                        <li>Click the <strong>Contact Seller</strong> button</li>
                        <li>Your default email client will open with a pre-filled message to the seller</li>
                        <li>Edit the message as needed and send</li>
                    </ol>
                    <p className="main-section text-gray-700 leading-relaxed mt-1 text-sm italic">Note: You must be signed in to see the Contact Seller button. You will not see this button on your own listings.</p>

                    <h3 className="accent-section text-lg font-semibold mt-4 mb-1">Creating a Listing</h3>
                    <ol className="main-section list-decimal ml-6 space-y-1 text-gray-700">
                        <li>Sign in to your account</li>
                        <li>Click <strong>Create Listing</strong> in the top right of the Shop page</li>
                        <li>Enter a title, description, and price</li>
                        <li>Optionally click <strong>Upload Image</strong> to attach a photo (JPEG or PNG)</li>
                        <li>Click <strong>Post Listing</strong> to publish</li>
                        <li>Your listing will appear immediately on the Shop page</li>
                    </ol>

                    <h3 className="accent-section text-lg font-semibold mt-4 mb-1">Deleting a Listing</h3>
                    <ol className="main-section list-decimal ml-6 space-y-1 text-gray-700">
                        <li>Sign in to the account that created the listing</li>
                        <li>A <strong>Delete</strong> button will appear on your listings</li>
                        <li>Click <strong>Delete</strong> to permanently remove the listing</li>
                    </ol>
                    <p className="main-section text-gray-700 leading-relaxed mt-1 text-sm italic">Note: You can only delete listings you created. This action cannot be undone.</p>



                    <h2 className="accent-section text-xl font-semibold mb-2">Community Page</h2>
                    <p className="main-section text-gray-700 leading-relaxed">The Community page is for sharing and discovering local cultural events.</p>

                    <h3 className="accent-section text-lg font-semibold mt-4 mb-1">Browsing Events</h3>
                    <ol className="main-section list-decimal ml-6 space-y-1 text-gray-700">
                        <li>Navigate to the <strong>Community</strong> page from the navigation bar</li>
                        <li>Browse events displayed as image cards showing title, author, and dates</li>
                        <li>Click any event card to view full details</li>
                    </ol>

                    <h3 className="accent-section text-lg font-semibold mt-4 mb-1">Saving an Event to Your Calendar</h3>
                    <ol className="main-section list-decimal ml-6 space-y-1 text-gray-700">
                        <li>Click on an event to open its details</li>
                        <li>Click <strong>Save Event to Calendar</strong></li>
                        <li>A menu will appear with three options:
                            <ul className="main-section list-disc ml-6 mt-1 space-y-1">
                                <li><strong>Google Calendar</strong> — opens Google Calendar in a new tab with the event pre-filled</li>
                                <li><strong>Apple / Outlook Calendar</strong> — downloads an .ics file that your calendar app will open automatically</li>
                                <li><strong>Cancel</strong> — closes the menu without saving</li>
                            </ul>
                        </li>
                    </ol>

                    <h3 className="accent-section text-lg font-semibold mt-4 mb-1">Creating a Community Post</h3>
                    <ol className="main-section list-decimal ml-6 space-y-1 text-gray-700">
                        <li>Sign in to your account</li>
                        <li>Click <strong>Create Community Post</strong> in the top right</li>
                        <li>Enter a title and description</li>
                        <li>Select a start date and end date using the date pickers</li>
                        <li>Optionally click <strong>Upload Image</strong> to attach a photo</li>
                        <li>Click <strong>Post Community Event</strong> to publish</li>
                    </ol>

                    <h3 className="accent-section text-lg font-semibold mt-4 mb-1">Deleting a Community Post</h3>
                    <ol className="main-section list-decimal ml-6 space-y-1 text-gray-700">
                        <li>Sign in to the account that created the post</li>
                        <li>A <strong>Delete</strong> button will appear on your posts</li>
                        <li>Click <strong>Delete</strong> to permanently remove the post</li>
                    </ol>
                </section>

                <section id="issues">
                    <h2 className="accent-section text-xl font-semibold mb-2"> Known Issues </h2>
                    <p className= "main-section text-gray-700 leading-relaxed">Listed are bugs we already know and are working to fix:</p>
                    <ul className="main-section list-disc ml-6 space-y-1 text-gray-700">
                        <li> No currently know issues. If you encounter a bug, please let us know at <strong> marketartcommunity@gmail.com </strong> </li>

                    </ul>
                </section>

                <section id="requirements">
                    <h2 className="accent-section text-xl font-semibold mb-2"> Requirements </h2>
                    <p className= "main-section text-gray-700 leading-relaxed"> Stable Internet connection</p>
                    <p className= "main-section text-gray-700 leading-relaxed"> Modern web browser (ex. Chrome, Firefox, Safari, etc.)</p>
                    <p className= "main-section text-gray-700 leading-relaxed"> An email address to create an account </p>
                </section>

                <section id="devdocs">
                <h2 className="accent-section text-xl font-semibold mb-2"> Developer Details</h2>
                <p className= "main-section text-gray-700 leading-relaxed">For technical documentation including setup instructions architecture details, and contribution guidelines: please follow <a href="https://github.com/423S26/project1/blob/main/README.md" target="_blank" rel="noopener noreferrer"
                                     style={{
                                         color: '#8B9D83',
                                         textDecoration: 'underline',
                                         fontWeight: 500,
                                     }}> this link</a> to get started with the project README on GitHub</p>
                </section>
            </div>


    </div>
    );
}

export default Documentation;