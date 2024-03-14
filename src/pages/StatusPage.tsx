import DroneImg from "../assets/drone.svg";
import "./StatusPage.scss";
import { useNavigate } from "react-router-dom";

const Status = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 30) + 5;
  };

  const navigate = useNavigate();

  return (
    <div className="statusWrapper">
      <h4>Ordernummer #12DV23F</h4>
      <img className="droneImg" src={DroneImg} alt="image of drone" />
      <h1>Din beställning är påväg!</h1>
      <h3>
        <span>{randomNumber()}</span> minuter
      </h3>
      <button
        className="statusBtn"
        onClick={() => setTimeout(() => navigate("/"), 500)}
      >
        Ok, cool!
      </button>
    </div>
  );
};

export default Status;
