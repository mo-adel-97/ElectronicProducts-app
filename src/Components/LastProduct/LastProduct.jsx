import React from "react";
import "./LastProduct.css";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import image1 from "../../Images/HeadPhoneLastProduct.jpg"
const LastProduct = ()=>{
    return(
        <div>
           <br /><br />
           <div className="LatstProductPara">
              <h1 style={{fontFamily:"cursive",padding:"40px"}}>Last Products</h1>
              <p style={{fontFamily:"cursive",padding:"40px",cursor:"pointer"}}>View All Products ➡️</p>
           </div>
           <div className="LatstProductCard">
      <Card sx={{ width: 320 }} style={{backgroundColor:"#f9f9f9"}} variant="plain"> 
        <img
        style={{height:"220px",width:"100%"}}
          src={image1}
          loading="lazy"
          alt=""
        />
      <CardContent orientation="horizontal">
        <div>
          <Typography  fontSize="lg" fontWeight="lg" style={{fontFamily:"cursive"}}>Product</Typography>
          <p style={{fontFamily:"cursive"}}>
            $2,900
          </p>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
           </div>
           <br/>
        </div>
    )
}

export default LastProduct