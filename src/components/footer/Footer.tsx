import FooterImg from "../../assets/footerimg.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <img className="footerImg" src={FooterImg} alt="footer image" />
    </div>
  );
};

export default Footer;
