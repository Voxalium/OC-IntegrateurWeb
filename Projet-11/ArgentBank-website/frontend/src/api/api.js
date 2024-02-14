export const LOGIN_URL = "http://localhost:3001/api/v1/user/login";
export const SIGNUP_URL = "http://localhost:3001/api/v1/user/signup";
export const PROFILE_URL = "http://localhost:3001/api/v1/user/profile";

//LOGIN
export const LOGIN_REQ = (email, password) => {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    };
};

//GET PROFILE
export const PROFILE_REQ = (token) => {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
};

//UPDATE PROFILE
export const UPDATE_USERNAME_REQ = (token, userName) => {
    return {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
    };
};
