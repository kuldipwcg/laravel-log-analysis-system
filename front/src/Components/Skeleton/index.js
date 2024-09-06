import React from "react";
import "./index.css"
/**
 * Skeleton Component
 *
 * @param {string} className - Additional class name for customization.
 * @param {number} counter - Number of skeleton items to display.
 * @param {string} height - Height of each skeleton item.
 */
const Skeleton = ({ className, counter, height }) => {
  // Create an array based on the counter to determine how many skeleton items to render.
  const skeletonItems = new Array(counter ? counter : 1).fill(0);

  return (
    <div
      className={`skeleton-container ${
        className ? className : ""
      } placeholder-glow`}
    >
      <div className="skeleton-content">
        {skeletonItems.map((item, index) => (
          <div
            key={index}
            style={{ height: height ? height : "100px" }}
            className="skeleton-item placeholder"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
