import { Link } from "react-router";
import { logoURL } from "../utils/constant"
import useOnlineStatus from "../utils/useOnlineStatus";

function Header() {

    const isOnline = useOnlineStatus();

    return(
        <div className="header">
            <Link to={"/"}>
                <div className="image-logo">
                    <img className="main-img" src={logoURL}/>
                </div>
            </Link>
            <div className="search-bar">
                <input placeholder="search for  resturant or food"/>
            </div>    
            <div  className="nav-items">    
                <nav>
                    <ul>
                        {isOnline ? (
                            <li>
                                <i className="fa-solid fa-signal" style={{ color: "rgb(131, 204, 42)" }}></i> online
                            </li>
                        ) : (
                            <li>
                                <i className="fa-solid fa-circle-xmark" style={{ color: "rgb(220, 38, 38)" }}></i> Offline
                            </li>
                        )}
                        <li >
                            <Link to={"/"} className="nav-option">Home</Link> 
                        </li>
                        <li  >
                            <Link to={"/about"} className="nav-option">About us</Link>    
                        </li>
                        <li  >
                            <Link to={"/contact"} className="nav-option">contact us</Link>    
                        </li>
                        <li  >
                            <Link to={"/cart"} className="nav-option">cart</Link>    
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header