import DroneImg from "../assets/drone.svg";

const Status = () => {
  return (
    <div>
      <h4>Ordernummer</h4>
      <img src={DroneImg} alt="image of drone" />
      <h1>Din beställning är påväg!</h1>
      <h3>minuter</h3>
      <button>Ok, cool!</button>
    </div>
  );
};

export default Status;
