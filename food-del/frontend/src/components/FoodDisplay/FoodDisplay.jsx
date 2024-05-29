/* eslint-disable no-constant-condition */
import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
// eslint-disable-next-line react/prop-types, no-unused-vars
const FoodDisplay = ({ category }) => {
  // eslint-disable-next-line no-unused-vars
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} {...item} id={item._id} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
