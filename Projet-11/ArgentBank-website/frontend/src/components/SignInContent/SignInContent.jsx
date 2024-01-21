import InputWrapper from "../Inputs/InputWrapper";
import InputRemember from "../Inputs/InputRemember";
import Button from "../Button/Button";
function SignInContent() {
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <InputWrapper title="Username" id="username" type="text" />
                <InputWrapper title="Password" id="password" type="password" />
                <InputRemember
                    title="Remember me"
                    id="remember-me"
                    type="checkbox"
                />
                <Button title="Sign In" className="sign-in-button" />
            </form>
        </section>
    );
}

export default SignInContent;
