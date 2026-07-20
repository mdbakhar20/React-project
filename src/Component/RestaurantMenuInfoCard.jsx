import react from "react";
import { imgBaseURL } from "../utils/constant";

const RestaurantMenuInfoCard = ({menu}) => {
    const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
  } = menu?.data?.cards[2]?.card?.card?.info;
    return(
          <div className="menu-div">
                <div>
                     <h1> {name} </h1>
                    <img className="menu-img" src={imgBaseURL + cloudinaryImageId} alt={name} />
                    <h3>🌟{avgRatingString} ({totalRatingsString})</h3>
                    <h3>{cuisines?.join(", ")}</h3>
                </div>
            </div>
    )
}

export default RestaurantMenuInfoCard;