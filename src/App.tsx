import "./sass/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMenuStore } from "./store/useMenuStore";
import { useCartStore } from "./store/useCartStore";
import Landing from "./pages/LandingPage";
import Menu from "./pages/MenuPage";
import About from "./pages/AboutPage";
import Status from "./pages/StatusPage";
import MenuOverlay from "./components/menuoverlay/MenuOverlay";
import CartOverlay from "./components/cartoverlay/CartOverlay";
useCartStore;

function App() {
  const { isMenuOpen } = useMenuStore();
  const { isCartOpen } = useCartStore();

  return (
    <>
      <BrowserRouter>
        {isMenuOpen && <MenuOverlay />}
        {isCartOpen && <CartOverlay />}
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
