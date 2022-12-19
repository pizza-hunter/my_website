import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import "./styles/css/index.css";
import { createRoot } from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAt,
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Interests from "./pages/Interests";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="work" element={<Work />} />
          <Route path="interests" element={<Interests />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

library.add(faAt, faArrowRightLong, faArrowLeftLong, faGithub, faLinkedin);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
