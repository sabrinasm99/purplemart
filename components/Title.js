import React from "react";
import { useSelector } from "react-redux";
function Title() {
  const test = useSelector(state => state.test);
  return (
    <React.Fragment>
          <div className="p-5 md:px-20 flex-grow pb-1" style={{marginTop:'61px'}}>
        <div className="bg-purple-800 rounded-md shadow-md p-3 md:p-5 text-white">
          <div className="text-center font-semibold md:font-bold text-lg md:text-xl lg:text-2xl">
            Welcome to the {test.title}!
          </div>
          <div className="text-sm md:text-base">
            If you want to get specific item, please select the category.
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default Title;
