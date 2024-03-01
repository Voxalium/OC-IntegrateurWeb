//Views
import { Intro } from "./views/Intro/Intro";
import { Project } from "./views/Project/Project";
import { Skills } from "./views/Skills/Skills";

import { Footer } from "./components/Footer/Footer";
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
