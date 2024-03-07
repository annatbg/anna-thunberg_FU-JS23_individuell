import ProfileForm from "../components/profileform/ProfileForm";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MenuIcon from "../assets/menuicon.svg";
import CartIcon from "../assets/carticon.svg";
import OrderHistory from "../components/orderhistory/OrderHistory";

const Profile = () => {
  return (
    <div>
      <Header
        iconOne={<img src={MenuIcon} alt="hamburger menu" />}
        iconTwo={<img src={CartIcon} alt="cart icon" />}
      />
      <ProfileForm />
      <OrderHistory />
      <Footer />
    </div>
  );
};

export default Profile;
