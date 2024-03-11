import "./sass/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Menu from "./pages/MenuPage";
import Cart from "./pages/CartPage";
import About from "./pages/AboutPage";
import Status from "./pages/StatusPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About iconOne />} />
          <Route path="/cart" element={<Cart iconOne iconTwo />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
