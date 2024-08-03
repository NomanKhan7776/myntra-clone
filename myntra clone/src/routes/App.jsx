import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../index.css";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import SkeletonLoading from "../components/SkeletonLoading";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.isFetching ? (
        <div className="main-skelton">
          {" "}
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonLoading key={i} />
          ))}
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </>
  );
}

export default App;
