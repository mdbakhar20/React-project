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
                        <li>Home</li>
                        <li>About us</li>
                        <li>contact us</li>
                        <li>cart</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header