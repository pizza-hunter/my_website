import logo from "./logo.svg";
import "./styles/css/App.css";
import { Header } from "./components/Header";
import { TextBlock } from "./components/TextBlock";
import { ChangeStyleButton } from "./components/ChangeStyleButton";
import { SpotifyCard } from "./components/SpotifyCard";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Navbar } from "./components/Navbar";
import { NavLink, Routes, Route } from "react-router-dom";

const App = () => (
  <div className="app">
    <h1>React Router Demo</h1>
    {/* <Navbar /> */}
    <Main />
  </div>
);
const Home = () => (
  <div className="home">
    <h1>Welcome to my portfolio website</h1>
    <p> Feel free to browse around and learn more about me.</p>
  </div>
);

const About = () => (
  <div className="about">
    <h1>About Me</h1>
    <p>
      Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
      corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
      molestias?
    </p>
    <p>
      Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
      corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
      molestias?
    </p>
  </div>
);

const Contact = () => (
  <div className="contact">
    <h1>Contact Me</h1>
    <p>
      You can reach me via email: <strong>hello@example.com</strong>
    </p>
  </div>
);
const Main = () => (
  <Routes>
    <Route path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
  </Routes>
);
// <div className="App ">
//   <div id="page-wrapper" className="container mx-auto px-4">
//     <div id="navbar-wrapper" className="flex justify-between">
//       <Header title="Hunter Green" />
//       <Navbar />
//     </div>
//     <TextBlock
//       className="text-left"
//       text="Hey I'm Hunter, a Software Engineer, designer, general web and technology enthusiast from Adelaide. Welcome to my humble ab code."
//     />
//     <TextBlock
//       className="text-left mt-20 mb-10"
//       text="Here's a showcase of some of my projects"
//     />
//     <ProjectShowcase />
//   </div>
// </div>

// function App() {
//   return (
//     <div className="App ">
//       <div id="page-wrapper" className="container mx-auto px-4">
//         <div id="navbar-wrapper" className="flex justify-between">
//           <Header title="Hunter Green" />
//           <Navbar />
//         </div>
//         <TextBlock
//           className="text-left"
//           text="Hey I'm Hunter, a Software Engineer, designer, general web and technology enthusiast from Adelaide. Welcome to my humble ab code."
//         />
//         <TextBlock
//           className="text-left mt-20 mb-10"
//           text="Here's a showcase of some of my projects"
//         />
//         <ProjectShowcase />
//       </div>
//     </div>
//   );
// }

export default App;
