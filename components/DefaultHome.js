import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BodyHome from "./BodyHome";
import inBrowser from "../lib/checkInBrowser";
import { useSelector } from "react-redux";
import Carousel from "./ReactCarousel";
import { Site } from "../config/site";
import jwt_decode from "jwt-decode";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import Axios from "axios";
import Router from "next/router";

function DefaultHome(props) {
  const auth = useSelector((state) => state.auth);
  const search = useSelector((state) => state.search);

  if (!auth.isAuthenticated) {
    if (inBrowser && localStorage.tokenLS) {
      Axios.post(
        Site.checkToken,
        {},
        {
          headers: {
            Authorization: localStorage.tokenLS || "",
          },
        }
      )
        .then(() => {
          const decoded = jwt_decode(localStorage.tokenLS);
          store.dispatch(setCurrentUser(decoded));
        })
        .catch((err) => {
          Router.push("/login");
          logoutUser();
        });
    }
  }
  let filter = "";
  if (search.isChanged) {
    filter = search.payload;
  }
  return (
    <React.Fragment>
      <Navbar />
      {/* <div className="px-5 pt-5 sm:px-12 md:px-16 lg:px-20 xl:px-24 rounded-lg mt-px62">
        <Keen className="rounded-lg">
          <div className="keen-slider__slide rounded-lg">
            <img src="/promo1.png" />
          </div>
          <div className="keen-slider__slide rounded-lg">
            <img src="/promo3.png" />
          </div>
          <div className="keen-slider__slide rounded-lg">
            <img src="/promo4.png" />
          </div>
        </Keen>
      </div> */}
      <Carousel />
      <Sidebar />
      <BodyHome final={filter ? filter : props.result} />
    </React.Fragment>
  );
}

export default DefaultHome;
