import { restaurantsArr } from "../utils/MockData";
import ResturantCard from "./ResturantCard";

function Body() {
    return(
        <div className="res-container">
            {restaurantsArr.map((resObj)=>{
                return <ResturantCard resDetail={resObj} key = {resObj.id}/>
            })}
        </div>
    )
}

export default Body;