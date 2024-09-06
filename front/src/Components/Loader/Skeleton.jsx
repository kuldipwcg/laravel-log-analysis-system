import React from "react";
import Loader from "./Loader";

const Skeleton = ({ className, counter, width }) => {
  // Create an array based on the counter to determine how many skeleton items to render.
  const skeletonItems = new Array(counter ? counter : 1).fill(0);

  return (
    <div
      className={`space-y-8 animate-pulse  rtl:space-x-reverse  d-flex justify-content-center `} >
      <div
        className="skeleton-content   "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {skeletonItems.map((item, index) => (
          <div
            key={index}
            style={{
              height: "30vh",
              width: width ? width : "100px",
            }}
            className={`rounded  ${className ? className : ""} `}
          >
          </div>
        ))}
        <Loader />
      </div>
    </div>
  );
};

export default Skeleton;
