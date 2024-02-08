import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../api/api";
import { userProfile } from "../../redux/actions/user.actions";
import Button from "../Button/Button";
function Header() {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const token = useSelector((state) => state.loginReducer.token);

    useEffect(() => {
        if (token) {
            getProfile(token, onSuccess);
        }
    }, [token]);

    const onSuccess = (data) => {
        dispatch(userProfile(data));
        setUserName(data.userName);
    };

    return (
        <div className="header">
            <h1>
                Welcome back <br />
                {userName}
            </h1>
            <Button title="Edit Name" className="edit-button" />
        </div>
    );
}

export default Header;
