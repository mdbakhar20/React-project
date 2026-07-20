import react, { useEffect, useState } from "react";
import { imgBaseURL, MenuAPI } from "../utils/constant";
import { useParams } from "react-router";
import { Shimmer2 } from "./Shimmer";
import { imgBaseURL } from "../utils/constant";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    
    const {resId} = useParams();

    const [showIndex ,setShowIndex] = useState(null);

    const menu = useRestaurantMenu(resId);

    if (menu ==null) {
        return (
        <div><Shimmer2/></div>)
    }
    // console.log("menu", menu?.data?.cards[5]?.groupedCard?.cardGroupMap?. REGULAR?.cards)
    const categories = 
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?. REGULAR?.cards.filter(
        (category) => {
        

            if(
                category?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            ) {
              
                return true;
            } else {
               
                return false;
            }
        }
    )
    console.log("sef", categories)
    const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
  } = menu?.data?.cards[2]?.card?.card?.info;

    return(
        <div 
      style={{
        paddingLeft: "340px",
        paddingTop: "100px",
        paddingBottom: "50px",
        paddingRight: "340px",
      }}
    >
            <RestaurantMenuInfoCard  menu ={menu} />
            
{console.log(categories)}
            {categories.map((category,index) => {
                return(
                    <RestaurantCategory
                        setIndex={() => {
                          setShowIndex(index === showIndex ? null : index);
                        }}
                        order={index === showIndex ? true : false}
                        key={category.card?.card?.categoryId} 
                        categoryInfo = {category.card?.card}
                    />
                )
            })}
            
        </div>
    )
    
}

export default RestaurantMenu;