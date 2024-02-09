import InputWrapper from "../Inputs/InputWrapper";
import Button from "../Button/Button";
function EditProfile() {
    return (
        <div className="edit-profile">
            <h1>Edit User info</h1>
            <InputWrapper title="User name:" type="text" />
            <InputWrapper title="First name:" type="text" />
            <InputWrapper title="Last name:" type="text" />
            <div className="edit-buttons">
                <Button title="Save" className="save-button" />
                <Button title="Cancel" className="cancel-button" />
            </div>
        </div>
    );
}

export default EditProfile;
