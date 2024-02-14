import InputWrapper from "../Inputs/InputWrapper";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateProfile } from "../../api/api";
import { updateUserName } from "../../redux/actions/user.actions";
function EditProfile({ onClick }) {
    const info = useSelector((state) => state.userReducer.userData);
    const token = useSelector((state) => state.loginReducer.token);

    const dispatch = useDispatch();

    const [userName, setUserName] = useState("");
    const firstName = info.firstName;
    const lastName = info.lastName;

    const onSuccess = () => {
        dispatch(updateUserName(userName));
    };
    return (
        <div className="edit-profile">
            <h1>Edit User info</h1>
            <form
                onSubmit={(e) => updateProfile(token, userName, onSuccess, e)}
            >
                <InputWrapper
                    title="User name:"
                    type="text"
                    value={userName}
                    set={(e) => setUserName(e.target.value)}
                />
                <InputWrapper
                    title="First name:"
                    id="readOnly-input"
                    type="text"
                    value={firstName ?? ""}
                    readOnly={true}
                />
                <InputWrapper
                    title="Last name:"
                    id="readOnly-input"
                    type="text"
                    value={lastName ?? ""}
                    readOnly={true}
                />
                <div className="edit-buttons">
                    <Button title="Save" className="save-button" />
                    <Button
                        title="Cancel"
                        className="cancel-button"
                        onClick={onClick}
                    />
                </div>
            </form>
        </div>
    );
}

export default EditProfile;
