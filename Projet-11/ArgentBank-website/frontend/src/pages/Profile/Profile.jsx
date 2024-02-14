//REACT/REDUX
import { userProfile } from "../../redux/actions/user.actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//COMPONENTS
import Account from "../../components/Account/Account";
import User from "../../components/User/User.jsx";
//DATA
import data from "../../data/mockData.json";
//REQ
import { PROFILE_URL } from "../../api/api";
import { PROFILE_REQ } from "../../api/api";

function Profile() {
    document.title = "Argent Bank - User";
    const token = useSelector((state) => state.loginReducer.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const res = await fetch(PROFILE_URL, PROFILE_REQ(token));
                    if (res.ok) {
                        const data = await res.json();
                        const userData = {
                            id: data.body.id,
                            email: data.body.email,
                            firstName: data.body.firstName,
                            lastName: data.body.lastName,
                            userName: data.body.userName,
                        };
                        dispatch(userProfile(userData));
                    } else {
                        console.error("Error get profile");
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            userData();
        }
    }, [dispatch, token]);

    return (
        <main className="main bg-dark">
            <h2 className="sr-only">Accounts</h2>
            <User />
            {data?.map((content, index) => (
                <Account
                    key={index}
                    title={content.title}
                    amount={content.amount}
                    description={content.description}
                />
            ))}
        </main>
    );
}
export default Profile;
