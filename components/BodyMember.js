import React from "react";
import { Site } from "../config/site";

function BodyMember(props) {
  let productList = null;
  if (props.final.length > 0) {
    productList = props.final.map((val) => {
      return (
        <div
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-none p-1 py-3 md:p-2"
          key={val._id}
        >
          <div className="rounded-md shadow-md h-64 p-3 md:p-2 flex flex-col bg-white text-center ">
            <div>
              <img
                src={`${Site.ori}/${val.image}`}
                alt="product"
                className="h-24 md:h-32 m-auto"
              />
            </div>
            <div className="mt-auto w-full">
              <span className="w-full text-gray-800 text-sm md:text-base">
                {val.name}
              </span>
              <h6 className="mx-auto text-base md:text-lg font-medium md:font-semibold">
                Rp{val.price.toLocaleString("id-ID")}
              </h6>
              <button className="m-auto mt-1 bg-purple-800 text-white rounded-sm text-sm px-1 focus:outline-none">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <React.Fragment>
      <div className="w-4/5 m-auto">
        <h1 className="text-lg font-medium">All Product</h1>
        <hr />
        <div className="w-full py-2 md:py-5 flex flex-wrap m-auto">
          {productList}
        </div>
      </div>
    </React.Fragment>
  );
}

export default BodyMember;
