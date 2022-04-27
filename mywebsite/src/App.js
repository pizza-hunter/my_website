import logo from "./logo.svg";
import "./styles/css/App.css";
import { Header } from "./components/Header";
import { TextBlock } from "./components/TextBlock";
import { ChangeStyleButton } from "./components/ChangeStyleButton";
import { SpotifyCard } from "./components/SpotifyCard";
import { ProjectShowcase } from "./components/ProjectShowcase";

function App() {
  return (
    <div className="App ">
      <div id="page-wrapper" className="container mx-auto px-4">
        <Header title="Hunter Green" />
        <TextBlock
          className="text-left"
          text="Hey I'm Hunter, a Software Engineer, designer, general web and technology enthusiast from Adelaide. Welcome to my humble ab code."
        />
        <TextBlock
          className="text-left mt-20 text-xl underline"
          text="CURRENTLY UNDER CONSTRUCTION!"
        />
        <TextBlock
          className="text-left mt-20 mb-10"
          text="Here's a showcase of some of my projects"
        />
        <ProjectShowcase />
      </div>
    </div>
  );
}

export default App;
