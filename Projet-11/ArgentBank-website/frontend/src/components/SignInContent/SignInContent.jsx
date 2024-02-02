import InputWrapper from "../Inputs/InputWrapper";
import InputRemember from "../Inputs/InputRemember";
import Button from "../Button/Button";
import { useState } from "react";
import { handleSubmit } from "../../api/api";
import { useNavigate } from "react-router-dom";

//TODO Error Message & Remember Me

function SignInContent() {
    //HOOKS
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    //Navigate
    const onSucessNavigate = () => {
        navigate("/logged");
    };
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form
                onSubmit={(e) =>
                    handleSubmit(email, password, onSucessNavigate, e)
                }
            >
                <InputWrapper
                    title="Username"
                    id="username"
                    type="text"
                    value={email}
                    set={(e) => setEmail(e.target.value)}
                />
                <InputWrapper
                    title="Password"
                    id="password"
                    type="password"
                    value={password}
                    set={(e) => setPassword(e.target.value)}
                />
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
