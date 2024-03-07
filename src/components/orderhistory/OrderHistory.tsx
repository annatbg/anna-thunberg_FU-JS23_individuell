import UserIcon from "../../assets/Profile.svg";
import "./OrderHistory.scss";

const OrderHistory = () => {
  return (
    <div className="orderHistoryWrapper">
      <img src={UserIcon} alt="" />
      <h1>Sixten</h1>
      <p>mailadress</p>
      <h2>Orderhistorik</h2>
      <ul>
        <li>
          <p>AB1123282323Z</p>
          <p>total ordersumma </p>
        </li>
      </ul>
      <p>totalt spenderat:</p>
    </div>
  );
};

export default OrderHistory;
