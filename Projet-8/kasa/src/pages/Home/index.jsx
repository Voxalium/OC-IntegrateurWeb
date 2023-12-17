//components
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

//image
import bannerImg from "../../assets/IMG.png";
import { useLoaderData } from "react-router-dom";

function Home() {
    const data = useLoaderData();
    return (
        <div className="home">
            <Banner
                title="Chez vous, partout ou ailleurs"
                img={bannerImg}
            ></Banner>
            <Gallery data={data} />
        </div>
    );
}

export default Home;
