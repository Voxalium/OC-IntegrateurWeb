import SignInContent from "../../components/SignInContent/SignInContent";
function Login() {
    document.title = "Argent Bank - Log In";
    return (
        <main className="main bg-dark">
            <SignInContent />
        </main>
    );
}

export default Login;
