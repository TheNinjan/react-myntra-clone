import { Outlet } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeItems from "../components/HomeItems";
import Home from "./Home";
import Fetchitems from "../components/Fetchitems";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import Slider from "../components/Slider";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <Slider />
      <Fetchitems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
