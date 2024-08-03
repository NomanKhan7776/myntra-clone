import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

function bag() {
  const bagItem = useSelector((store) => store.bag);

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagItem.length === 0 && <h1>Card Is Empty</h1>}
          {bagItem.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
}

export default bag;
