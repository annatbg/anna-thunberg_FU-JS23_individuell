import PlusIcon from "../../assets/plusicon.svg";
import "./ProductList.scss";
import { useCartStore, CartItem } from "../../store/useCartStore";

const ProductList = () => {
  const { addCartItem } = useCartStore();

  const handleAddToCart = (item: CartItem) => {
    addCartItem(item);
  };

  return (
    <div className="productlistWrapper">
      <ul className="productList">
        <li className="productItem">
          <div className="product">
            <img
              className="plusIcon"
              src={PlusIcon}
              alt="plus icon"
              onClick={() =>
                handleAddToCart({ id: 1, name: "Bryggkaffe", price: 49 })
              }
            />

            <div>
              <h3>Bryggkaffe</h3>
              <p>Bryggd på månadens bönor</p>
            </div>
          </div>
          <div className="price">
            <h3>49 kr</h3>
          </div>
        </li>

        <li className="productItem">
          <div className="product">
            <img
              className="plusIcon"
              src={PlusIcon}
              alt="plus icon"
              onClick={() =>
                handleAddToCart({ id: 2, name: "Caffe Doppio", price: 49 })
              }
            />

            <div>
              <h3>Caffè Doppio</h3>
              <p>Bryggd på månadens bönor</p>
            </div>
          </div>
          <div className="price">
            <h3>49 kr</h3>
          </div>
        </li>

        <li className="productItem">
          <div className="product">
            <img
              className="plusIcon"
              src={PlusIcon}
              alt="plus icon"
              onClick={() =>
                handleAddToCart({ id: 3, name: "Cappuccino", price: 49 })
              }
            />

            <div>
              <h3>Cappuccino</h3>
              <p>Bryggd på månadens bönor</p>
            </div>
          </div>
          <div className="price">
            <h3>49 kr</h3>
          </div>
        </li>

        <li className="productItem">
          <div className="product">
            <img
              className="plusIcon"
              src={PlusIcon}
              alt="plus icon"
              onClick={() =>
                handleAddToCart({ id: 4, name: "Latte Macchiato", price: 49 })
              }
            />

            <div>
              <h3>Latte Macchiato</h3>
              <p>Bryggd på månadens bönor</p>
            </div>
          </div>
          <div className="price">
            <h3>49 kr</h3>
          </div>
        </li>

        <li className="productItem">
          <div className="product">
            <img
              className="plusIcon"
              src={PlusIcon}
              alt="plus icon"
              onClick={() =>
                handleAddToCart({ id: 5, name: "Kaffe Latte", price: 49 })
              }
            />
            <div>
              <h3>Kaffe Latte</h3>
              <p>Bryggd på månadens bönor</p>
            </div>
          </div>
          <div className="price">
            <h3>49 kr</h3>
          </div>
        </li>

        <li className="productItem">
          <div className="product">
            <img
              className="plusIcon"
              src={PlusIcon}
              alt="plus icon"
              onClick={() =>
                handleAddToCart({ id: 6, name: "Cortado", price: 39 })
              }
            />

            <div>
              <h3>Cortado</h3>
              <p>Bryggd på månadens bönor</p>
            </div>
          </div>
          <div className="price">
            <h3>39 kr</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
