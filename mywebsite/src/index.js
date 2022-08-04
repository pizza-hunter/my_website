import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import CoolStuff from "./pages/CoolStuff";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import "./styles/css/index.css";
import { createRoot } from "react-dom/client";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="work" element={<Work />} />
          <Route path="coolstuff" element={<CoolStuff />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
