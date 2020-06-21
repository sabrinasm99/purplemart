import React from "react";
import Link from "next/link";
// import grocery from "./grocery.jpg";
// import momnkids from "./momnkids.jpg";
// import healthbeauty from "./healthbeauty.jpg";
// import electronic from "./electronic.jpg";

function Sidebar() {
  return (
    <React.Fragment>
      <div className="w-4/5 md:w-3/5 m-auto py-5 md:px-3 md:py-3 md:my-5 md:bg-gray-200 md:overflow-x-auto md:rounded-md">
        <div className="hidden md:block md:pl-2 md:font-bold">Categories</div>
        <div className="w-full flex flex-wrap md:flex-no-wrap">
          <div className="w-1/2 md:w-1/4 flex-none p-1">
            <Link href="/static/grocery.jpg">
              <div className="rounded-md shadow-xl md:shadow-md text-center bg-white p-2 h-full flex flex-col cursor-pointer">
                <img src='/grocery.jpg' alt="grocery" className="block m-auto" />
                <span className="block pt-3 md:pt-0 mt-auto text-purple-800 tracking-wider md:text-xs md:font-medium">
                  GROCERY
                </span>
              </div>
            </Link>
          </div>

          <div className="w-1/2  md:w-1/4 flex-none p-1">
            <div className="rounded-md shadow-xl md:shadow-md text-center bg-white p-2 h-full flex flex-col cursor-pointer">
              <img src='/momnkids.jpg' alt="mom & kids" className="block m-auto" />
              <span className="block pt-3 md:pt-0 mt-auto text-purple-800 tracking-wider md:text-xs md:font-medium">
                MOM & KIDS
              </span>
            </div>
          </div>

          <div className="w-1/2  md:w-1/4 flex-none p-1">
            <div className="rounded-md shadow-xl md:shadow-md text-center bg-white p-2 h-full flex flex-col cursor-pointer">
              <img
                src='/healthbeauty.jpg'
                alt="health & beauty"
                className="block m-auto"
              />
              <span className="block pt-3 md:pt-0 mt-auto text-purple-800 tracking-wider md:text-xs md:font-medium">
                HEALTH & BEAUTY
              </span>
            </div>
          </div>

          <div className="w-1/2  md:w-1/4 flex-none p-1">
            <div className="rounded-md shadow-xl md:shadow-md text-center bg-white p-2 h-full flex flex-col cursor-pointer">
              <img src='/electronic.jpg' alt="electronic" className="block m-auto" />
              <span className="block pt-3 md:pt-0 mt-auto text-purple-800 tracking-wider md:text-xs md:font-medium">
                ELECTRONIC
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
