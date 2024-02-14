//API
import { LOGIN_URL } from "../../api/api";
import { LOGIN_REQ } from "../../api/api";

//COMPONENTS
import InputWrapper from "../Inputs/InputWrapper";
import InputRemember from "../Inputs/InputRemember";
import Button from "../Button/Button";

//REACT
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFail, loginSuccess } from "../../redux/actions/login.actions";

function SignInContent() {
    //HOOKS
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(LOGIN_URL, LOGIN_REQ(email, password));
            if (res.ok) {
                const data = await res.json();
                const token = data.body.token;
                dispatch(loginSuccess(token));
                sessionStorage.setItem("token", token);
                if (rememberMe) {
                    localStorage.setItem("token", token);
                }
                navigate("/profile");
            } else {
                const error = "Incorrect field";
                setErrorMessage(error);
                dispatch(loginFail(error));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
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
                    checked={rememberMe}
                    set={(e) => setRememberMe(e.target.checked)}
                />
                {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                )}
                <Button title="Sign In" className="sign-in-button" />
            </form>
        </section>
    );
}

export default SignInContent;
