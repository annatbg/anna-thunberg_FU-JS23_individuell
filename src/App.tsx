import "./sass/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Menu from "./pages/MenuPage";
import About from "./pages/AboutPage";
import Status from "./pages/StatusPage";
import MenuOverlay from "./components/menuoverlay/MenuOverlay";
import { useMenuStore } from "./store/useMenuStore";

function App() {
  const { isMenuOpen } = useMenuStore();

  return (
    <>
      <BrowserRouter>
        {isMenuOpen && <MenuOverlay />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
