import React from "react";
import "./ViewPage.css";
import image from '../../Images/phone2.png'
import { Button } from "@mui/material";
import { Fade, Slide } from 'react-reveal';
const ViewHome = ()=>{
    return(
        
        <div className="View">
            <Slide left duration={1500} delay={500}>
           <div className="div1">
             <h2 style={{fontFamily:"cursive"}}>
             Mobile phones offer & FOR SHOPPING
             </h2>
             <br/>
             <p style={{color:"#5b5b5b",textAlign:"left",fontSize:"18px",fontFamily:"cursive"}}>
             Nam vel augue sit amet ligula tincidunt blandit sed sed neque.
              Morbi vulputate augue malesuada mi viverra blandit.
             </p>
             <br/>
             <Button style={{width:"60%",letterSpacing:"4px",height:"40px",
             backgroundColor:"orange",fontSize:"15px"}} variant="contained">SHOPPING</Button>
           </div>
           </Slide>
           <Slide bottom duration={2000} delay={500}>
          <div className="div2">
           <img src={image} alt="this is image" className="image" />
           </div>
           </Slide>
        </div>
    )
}
export default ViewHome