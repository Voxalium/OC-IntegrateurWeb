import { Link } from "react-router-dom";
function Error() {
    document.title = "Agent Bank - Page Not Found"
    return (
        <main className="main bg-dark">
            <div className="error-container">
                <h1>Error 404</h1>
                <p>Page not found</p>
                <Link to="/" class="error-link">
                    Return to homepage
                </Link>
            </div>
        </main>
    );
}

export default Error;
