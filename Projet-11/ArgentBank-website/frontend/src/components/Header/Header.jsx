import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../api/api";
import { userProfile } from "../../redux/actions/user.actions";
import Button from "../Button/Button";
import EditProfile from "../EditProfile/EditProfile";
function Header() {
    const info = useSelector((state) => state.userReducer.userData);
    const [userName, setUserName] = useState(info.userName || "");
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const onEdit = () => {
        setIsEditing(!isEditing);
    };
    const token = useSelector((state) => state.loginReducer.token);

    useEffect(() => {
        if (token) {
            getProfile(token, onSuccess);
        }
    }, [token]);

    useEffect(() => {
        setUserName(info.userName);
    });
    const onSuccess = (data) => {
        dispatch(userProfile(data));
        setUserName(data.userName);
    };

    return isEditing ? (
        <EditProfile onClick={onEdit} />
    ) : (
        <div className="header">
            <h1>
                Welcome back <br />
                {userName}
            </h1>
            <Button
                title="Edit Name"
                className="edit-button"
                onClick={onEdit}
            />
        </div>
    );
}

export default Header;
