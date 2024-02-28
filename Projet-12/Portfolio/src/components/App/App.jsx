import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Intro } from "../Intro/Intro";
import { Project } from "../Project/Project";
import { Skills } from "../Skills/Skills";
function App() {
    return (
        <div id="mainDiv">
            <Intro />
            <Project />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
