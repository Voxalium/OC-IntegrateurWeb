function Profile(props) {
    const fullName = props.name;
    const picture = props.picture;
    const split = fullName.split(" ");
    const name = split.join("\n");

    return (
        <div className="profile">
            <div className="profile-info">
                <p>{name}</p>
                <img src={picture} alt="host picture" />
            </div>
        </div>
    );
}

export default Profile;
