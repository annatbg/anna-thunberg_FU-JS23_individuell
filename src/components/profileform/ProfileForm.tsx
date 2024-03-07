import SmallLogo from "../../assets/small-logo.svg";
import "./ProfileForm.scss";

const ProfileForm = () => {
  return (
    <div>
      <img src={SmallLogo} alt="" />
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </p>
      <form className="form">
        <label>
          Namn
          <input type="text" placeholder="kaffelover" />
        </label>

        <label>
          Epost
          <input type="text" placeholder="kaffelover87@javamail.com" />
        </label>

        <label>
          <input type="checkbox" />
          GDPR ok
        </label>
      </form>
      <button>Brew me a cup!</button>
    </div>
  );
};

export default ProfileForm;
