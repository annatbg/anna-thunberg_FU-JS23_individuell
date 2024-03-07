import PlusIcon from "../../assets/plusicon.svg";
import "./ProductList.scss";

const ProductList = () => {
  return (
    <div>
      <ul className="productList">
        <li>
          <h3>Bryggkaffe</h3>
          <p>196kr</p>
          <img src={PlusIcon} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
