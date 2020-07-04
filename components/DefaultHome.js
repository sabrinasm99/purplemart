import React, { useState } from "react";
import Navbar from "./Navbar";
import Keen from "./Keen";
import Sidebar from "./Sidebar";
import BodyHome from "./BodyHome";
import inBrowser from "../lib/checkInBrowser";
import { useSelector } from "react-redux";
import Axios from "axios";

function DefaultHome(props) {
  const auth = useSelector((state) => state.auth);
  const search = useSelector(state => state.search);

  if (inBrowser && localStorage.tokenLS) {
    if (!auth.isAuthenticated) {
      return null;
    }
  }
  let filter = '';
  if (search.isChanged) {
    filter = search.payload;
    // setProducts()
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="px-5 pt-5 sm:px-12 md:px-16 lg:px-20 xl:px-24 rounded-lg mt-px62">
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
      </div>
      <Sidebar />
      <BodyHome final={filter ? filter : props.result} />
    </React.Fragment>
  );
}

export default DefaultHome;
