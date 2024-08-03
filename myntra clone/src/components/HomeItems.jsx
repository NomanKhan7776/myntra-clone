import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bag";
import { Link } from "react-router-dom";

function HomeItems({ item }) {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.bag);
  const isInBag = items.some((bagItem) => bagItem.id === item.id);
  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {isInBag ? (
        <Link to={"/bag"}>
          <button className="btn-add-bag bg-Change">Go To Cart</button>
        </Link>
      ) : (
        <button className="btn-add-bag" onClick={handleAddToBag}>
          Add to Bag
        </button>
      )}
    </div>
  );
}

export default HomeItems;
