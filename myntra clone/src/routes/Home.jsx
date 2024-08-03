import { useSelector } from "react-redux";
import HomeItems from "../components/HomeItems";


function Home() {
  const defaultItems = useSelector((store) => store.items);

  return (
    <main className="main-container">
     
      {defaultItems.map((items) => {
        return <HomeItems key={items.id} item={items} />;
      })}
    </main>
  );
}

export default Home;
