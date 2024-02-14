//API
import { PROFILE_URL, UPDATE_USERNAME_REQ } from "../../api/api";
//REDUX
import { updateUserName } from "../../redux/actions/user.actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//COMPONENT
import Button from "../Button/Button";
import InputWrapper from "../Inputs/InputWrapper";

function User() {
    const token = useSelector((state) => state.loginReducer.token);
    const userData = useSelector((state) => state.userReducer.userData);
    const [userName, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const onEdit = () => {
        setIsEditing(!isEditing);
    };
    const dispatch = useDispatch();

    const handleUpdateUserName = async (e) => {
        e.preventDefault();
        if (userName) {
            try {
                const res = await fetch(
                    PROFILE_URL,
                    UPDATE_USERNAME_REQ(token, userName)
                );
                if (res.ok) {
                    const data = await res.json();
                    const userName = data.body.userName;
                    setErrorMessage("");
                    dispatch(updateUserName(userName));
                    setIsEditing(!isEditing);
                } else {
                    console.error("Invalid Fields");
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            setErrorMessage("Invalid Field");
        }
    };

    return (
        <div className="header">
            {!isEditing ? (
                <div>
                    <h2>
                        Welcome back <br />
                        {userData.firstName} {userData.lastName} !
                    </h2>
                    <Button
                        title="Edit Name"
                        className="edit-button"
                        onClick={onEdit}
                    />
                </div>
            ) : (
                <div className="edit-profile">
                    <h2>Edit user info</h2>
                    <form>
                        <InputWrapper
                            title="User name:"
                            type="text"
                            value={userName}
                            set={(e) => setUserName(e.target.value)}
                        />
                        <InputWrapper
                            title="First Name:"
                            id="readOnly-input"
                            type="text"
                            value={userData.firstName}
                            readOnly={true}
                        />
                        <InputWrapper
                            title="Last Name:"
                            id="readOnly-input"
                            type="text"
                            value={userData.lastName}
                            readOnly={true}
                        />

                        {errorMessage && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                        <div className="edit-buttons">
                            <Button
                                title="Save"
                                className="save-button"
                                onClick={handleUpdateUserName}
                            />
                            <Button
                                title="Cancel"
                                className="cancel-button"
                                onClick={onEdit}
                            />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default User;
