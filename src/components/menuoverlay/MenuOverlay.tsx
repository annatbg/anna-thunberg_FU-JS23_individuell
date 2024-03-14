import "./MenuOverlay.scss";
import LineDecor from "../../assets/Rectangle 15.png";
import { useNavigate } from "react-router-dom";
import { useMenuStore } from "../../store/useMenuStore";

const MenuOverlay = () => {
  const navigate = useNavigate();
  const { closeMenu } = useMenuStore();

  const handleNavigation = (path: string) => {
    closeMenu();
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return (
    <div className="menuOverlay">
      <button className="menuOverlayBtn" onClick={closeMenu}>
        X
      </button>

      <ul className="menuList">
        <li className="menuItem" onClick={() => handleNavigation("/menu")}>
          <h4>Meny</h4>
          <img src={LineDecor} alt="line" />
        </li>

        <li className="menuItem" onClick={() => handleNavigation("/about")}>
          <h4>Vårt Kaffe</h4>
          <img src={LineDecor} alt="line" />
        </li>

        <li className="menuItem">
          <h4>Min profil</h4>
          <img src={LineDecor} alt="line" />
        </li>

        <li className="menuItem">
          <h4>Orderstatus</h4>
          <img src={LineDecor} alt="line" />
        </li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
