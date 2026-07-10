import { restaurantsArr } from "../utils/MockData";
import ResturantCard from "./ResturantCard";
import { Shimmer } from "./Shimmer";

function Body() {
    return(
        <div className="res-container">
            <Shimmer />
            <div>
                {/* {restaurantsArr.map((resObj)=>{
                    return <ResturantCard resDetail={resObj} key = {resObj.id}/> */}
                {/* })} */}
            </div>

        </div>
    )
}

export default Body;