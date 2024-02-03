export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const loginSucess = () => {
    return {
        type: LOGIN_SUCESS,
    };
};

export const loginFail = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
