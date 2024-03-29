import Hero from "../../components/Hero/Hero";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import chat from "../../assets/icon-chat.webp";
import money from "../../assets/icon-money.webp";
import security from "../../assets/icon-security.webp";

function Home() {
    document.title = "Argent Bank - Home";
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
