import { useEffect, useState } from "react";
import { MenuAPI } from "./constant";

const useRestaurantMenu = (resId) => {
    // const {resId} =useParams();
    const [menu,setMenu] = useState(null);

    useEffect(() => {
        getRestaurantMenu();
    },[]);

    const getRestaurantMenu =async () => {
        const rawData = await fetch(MenuAPI +resId);
        const json = await rawData.json();
       setMenu(json);
    //    console.log(json)
    }
    return menu;
}

export default useRestaurantMenu;