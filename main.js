import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
    return(
        <div className="header">
            <div className="image-logo">
                <img  src="https://ik.imagekit.io/moz3rntpv/pngtree-food-logo-png-image_8239850.png"/>
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

function main() {
    
}

function App() {
    return( 
        <div>  
           < Header/>
           <main/>
        </div> 
)}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>)