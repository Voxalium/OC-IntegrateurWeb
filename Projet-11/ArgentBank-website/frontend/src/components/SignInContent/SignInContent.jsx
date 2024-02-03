import InputWrapper from "../Inputs/InputWrapper";
import InputRemember from "../Inputs/InputRemember";
import Button from "../Button/Button";
import { useState } from "react";
import { handleSubmit } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFail, loginSucess } from "../../redux/actions/login.actions";

function SignInContent() {
    //HOOKS
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const error = useSelector((state) => state.loginReducer.error);
    //Navigate
    const onSucess = () => {
        navigate("/logged");
        dispatch(loginSucess());
    };
    //Fail
    const onFail = () => {
        setErrorMessage({ error });
        dispatch(loginFail("Invalid Fields"));
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form
                onSubmit={(e) =>
                    handleSubmit(
                        email,
                        password,
                        rememberMe,
                        onSucess,
                        onFail,
                        e
                    )
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
                    checked={rememberMe}
                    set={(e) => setRememberMe(e.target.checked)}
                />
                <Button title="Sign In" className="sign-in-button" />
                {errorMessage && <p className="error-message">{error}</p>}
            </form>
        </section>
    );
}

export default SignInContent;
