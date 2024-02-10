const LOGIN_URL = "http://localhost:3001/api/v1/user/login";
const SIGNUP_URL = "http://localhost:3001/api/v1/user/signup";
const PROFILE_URL = "http://localhost:3001/api/v1/user/profile";

//LOGIN
export const handleSubmit = (
    email,
    password,
    rememberMe,
    onSuccessCallback,
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

            onSuccessCallback(data.body.token);
        })
        .catch((error) => {
            console.error(error);
        });
};

//GET PROFILE
export const getProfile = (token, onSuccessCallback) => {
    const REQ = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    fetch(PROFILE_URL, REQ)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else if (res.status === 400) {
                throw new Error("Invalid Field");
            } else if (res.status === 401) {
                throw new Error("Unauthorized");
            } else if (res.status === 500) {
                throw new Error("Internal Server Error");
            }
        })
        .then((data) => {
            const userData = data.body;
            onSuccessCallback(userData);
        })
        .catch((error) => {
            console.error(error);
        });
};

//UPDATE PROFILE
export const updateProfile = (token, userName, onSuccessCallback, e) => {
    e.preventDefault();

    const REQ = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
    };

    fetch(PROFILE_URL, REQ)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else if (res.status === 400) {
                //Fail Callback
                throw new Error("Invalid Field");
            } else if (res.status === 500) {
                throw new Error("Internal Server Error");
            }
        })
        .then((data) => {
            const userName = data.body.userName;
            onSuccessCallback(userName);
        })
        .catch((error) => {
            console.log(error);
        });
};
//SIGNUP
export const handleSignup = (
    email,
    password,
    firstName,
    lastName,
    userName,
    e
) => {
    e.preventDefault();

    const REQ = {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            password,
            firstName,
            lastName,
            userName,
        }),
    };

    fetch(SIGNUP_URL, REQ)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else if (res.status === 400) {
                //Fail Callback
                throw new Error("Invalid Field");
            } else if (res.status === 500) {
                throw new Error("Internal Server Error");
            }
        })
        .then((data) => {
            //Success Callback
        })
        .catch((error) => {
            console.error(error);
        });
};
