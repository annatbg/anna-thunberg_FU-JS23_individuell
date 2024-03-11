import Background from "../assets/Frame.svg";
import LandingLogo from "../assets/landinglogo.svg";
import "./LandingPage.scss";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landingWrapper">
      <img className="bgImg" src={Background} alt="background leaves" />
      <img
        className="logoImg"
        src={LandingLogo}
        alt="landing page logo"
        onClick={() => navigate("/menu")}
      />
    </div>
  );
};

export default Landing;
