import React from "react";
import { Link } from "react-router-dom";
let address = [
  {adrress:"images/gallery-img-1.jpg" ,name:"Pastry"},
  {adrress:"images/gallery-img-2.jpg" ,name:"Pan-Cakes"},
  {adrress:"images/gallery-img-3.jpg" ,name:"pizza"},
  {adrress:"images/gallery-img-4.jpg" ,name:"Burger"},
  {adrress:"images/gallery-img-5.jpg" ,name:"Sandwich"},
  {adrress:"images/gallery-img-6.jpg" ,name:"Shawarma"}
];

const section3 = () => {
  return (
    <div className="section-3" id="section-3">
      <div>
        <h1 style={{ marginTop: "20px" }}>Gallery</h1>
      </div>
      <div className="Gallery">
        {address.map((a, key) => {
          return (
            <div className="Image" key={key}>
              <img
                className="img-gallery"
                src={a.adrress}
                height="250px"
                width="250px"
                alt=""
              />
              <h3 className="Details" style={{color:"white"}}>{a.name}✨✨✨</h3>
            </div>
          );
        })}
      </div>
      <Link to="/">
        <button className="button">Back⬅</button>
      </Link>
    </div>
  );
};

export default section3;
