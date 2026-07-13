import Header from "./Component/Header"
import Body from "./Component/Body"
import Footer from "./Component/Footer"
import { Outlet } from "react-router"


function AppLayout() {
    return( 
        <div>  
           <Header />
           <Outlet />
           <Footer />
        </div> 
)}

export default AppLayout