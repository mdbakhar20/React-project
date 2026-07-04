import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
    return(
        <div className="header">
            <div>
             
                <img  src="https://ik.imagekit.io/moz3rntpv/OIP.webp"/>
                <h1>hello</h1>
            </div>

        </div>
    )
}

function App() {
    return( 
        <div>  
           < Header/>
            
        </div> 
)}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>)