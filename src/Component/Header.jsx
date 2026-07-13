import { Link } from "react-router";
import { logoURL } from "../utils/constant"

function Header() {
    return(
        <div className="header">
            <div className="image-logo">
                <img className="main-img" src="https://ik.imagekit.io/moz3rntpv/pngtree-food-logo-png-image_8239850.png"/>
            </div>
            <div className="search-bar">
                <input placeholder="search for  resturant or food"/>
            </div>    
            <div  className="nav-items">    
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link> 
                        </li>
                        <li>
                            <Link to={"/about"}>About us</Link>    
                        </li>
                        <li>
                            <Link to={"/contact"}>contact us</Link>    
                        </li>
                        <li>
                            <Link to={"/cart"}>cart</Link>    
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header