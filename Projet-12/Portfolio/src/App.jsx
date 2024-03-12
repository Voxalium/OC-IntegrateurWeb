//Views
import { Intro } from "./views/Intro/Intro";
import { Project } from "./views/Project/Project";
import { Skills } from "./views/Skills/Skills";

import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div id="mainDiv">
      <div className="scroll">
        <Intro />
        <Project />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}


export default App;
