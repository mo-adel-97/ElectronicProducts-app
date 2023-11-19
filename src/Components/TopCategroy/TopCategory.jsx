import React from "react";
import { Zoom } from "react-reveal";
import "./TopCategory.css";
import { ArrayCategory } from "../TopCategoriesArray";

const TopCategory = ()=>{
    return(
        <div>
          <Zoom duration={1500} delay={500}>
           <br/> <br/> <br/> <br/>
          <h2 style={{fontFamily:"cursive",wordSpacing:"5px",
          letterSpacing:"2px"}}>Top Categories </h2>
          <br/><br/>
          <div className="TopCategory">
          {ArrayCategory.map((fruit, index) => (
            <div>
            <img src={fruit.image}  className="CardMedia" alt="green iguana" />
          <p style={{fontFamily:"cursive",fontSize:"20px"}}>{fruit.title}</p>
          </div>
        ))}
        
          </div>
          </Zoom>
          <br/><br/>
        </div>
    )
}

export default TopCategory;