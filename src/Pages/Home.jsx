import React from "react";
import NavBar from "../Components/Navbar";
import ViewHome from "../Components/ViewHome/ViewPage";
import TopCategory from "../Components/TopCategroy/TopCategory";
import LastProduct from "../Components/LastProduct/LastProduct";
const Home = ()=>{
    return(
        <div>
           <NavBar/>
           <ViewHome />
           <TopCategory/>
           <LastProduct/>
        </div>
    )
}
export default Home;
