const LOGIN_URL = "http://localhost:3001/api/v1/user/login";
const SIGNUP_URL = "http://localhost:3001/api/v1/user/signup";
const PROFILE_URL = "http://localhost:3001/api/v1/user/profile";

export const handleSubmit = (
    email,
    password,
    rememberMe,
    onSucessCallback,
    onFailCallback,
    e
) => {
    e.preventDefault();
    const REQ = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    };

    fetch(LOGIN_URL, REQ)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else if (res.status === 400) {
                onFailCallback();
                throw new Error("Invalid Fields");
            } else if (res.status === 500) {
                throw new Error("Internal Server Error");
            }
        })
        .then((data) => {
            rememberMe
                ? localStorage.setItem("token", data.body.token)
                : sessionStorage.setItem("token", data.body.token);

            onSucessCallback();
        })
        .catch((error) => {
            console.error(error);
        });
};
