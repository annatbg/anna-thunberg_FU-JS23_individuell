import Background from "../../assets/Frame.svg";
import LandingLogo from "../../assets/landinglogo.svg";
import "./LandingHero.scss";

const Header = () => {
  return (
    <div className="landingWrapper">
      <img className="bgImg" src={Background} alt="background leaves" />
      <img className="logoImg" src={LandingLogo} alt="landing page logo" />
    </div>
  );
};

export default Header;
