import react, { useEffect, useState } from "react";
import { MenuAPI } from "../utils/constant";
import { useParams } from "react-router";
import { Shimmer2 } from "./Shimmer";

const RestaurantPage = () => {
    const {resId} =useParams();
    const [menu,setMenu] = useState(null);

    useEffect(() => {
        getRestaurantMenu();
    },[]);

    const getRestaurantMenu =async () => {
        const rawData = await fetch(MenuAPI +resId);
        const json = await rawData.json();
       setMenu(json);
    }

    if (menu ==null) {
        return (
        <div><Shimmer2/></div>)
    }
    

    const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
  } = menu?.data?.cards[2]?.card?.card?.info;

    return(
        <div>
            RestaurantCard
           <h1> {name} </h1>
        </div>
    )
    
}

export default RestaurantPage;