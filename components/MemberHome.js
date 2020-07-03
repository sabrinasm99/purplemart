import React, { useEffect } from "react";
import Navbar from "./Navbar";
import BodyMember from "./BodyMember";
import Keen from "./Keen";
import Sidebar from "./Sidebar";
import { Site } from "../config/site";
import { setAuthToken } from "../utils/AuthService";
import { useSelector } from "react-redux";
import { logoutUser } from "./actions/authAction";
import Axios from "axios";
import inBrowser from "../lib/checkInBrowser";
import jwt_decode from "jwt-decode";
import store from "./store";
import { setCurrentUser } from "./actions/authAction";
import Router from "next/router";

function MemberHome(props) {
  const auth = useSelector((state) => state.auth);
  const [token, setToken] = React.useState("");

  useEffect(() => {
    if (inBrowser && localStorage.tokenLS) {
      setAuthToken(localStorage.tokenLS);

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
  }, []);
  if (!auth.isAuthenticated) return null;
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
      <BodyMember final={props.result} />
    </React.Fragment>
  );
}

export default MemberHome;
