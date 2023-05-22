import React from "react";
import './Home.css'
import image from './Product.jpg'

function Product() {
    return (
        <div className="home">
            <div className="item">
                 <img id="image" src={image} alt="home"/>
            </div>
            <div className="Heading">
               
                <a href="#">Category</a>
            </div>

           
          
          
        </div>
    )

}

export default Product;