import Hero from "../../components/Hero/Hero";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import chat from "../../assets/icon-chat.webp";
import money from "../../assets/icon-money.webp";
import security from "../../assets/icon-security.webp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PROFILE_URL, PROFILE_REQ } from "../../api/api.js";
import { userProfile } from "../../redux/actions/user.actions.js";
function Home() {
    document.title = "Argent Bank - Home";

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
        <main>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <FeatureItem
                    img={chat}
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. "
                />
                <FeatureItem
                    img={money}
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be! "
                />
                <FeatureItem
                    img={security}
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your data and money is always safe. "
                />
            </section>
        </main>
    );
}

export default Home;
