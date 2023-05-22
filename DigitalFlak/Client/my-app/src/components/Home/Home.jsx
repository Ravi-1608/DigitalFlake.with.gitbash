import React from "react";
import './Home.css'
import image from './Home.jpg'

function Home() {
    const navButton = document.getElementById("nav-button");
    // const changePropertu = 

    return (
        <div className="home">
            <div className="item">
                 <img id="image" src={image} alt="home"/>
            </div>
            <div className="Heading">
                <a href="#"> Home</a>
            </div>
            
          
          
        </div>
    )

}

export default Home;