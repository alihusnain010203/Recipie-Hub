import React from "react";
import "./sections-style.css";
import { Link } from "react-router-dom";
import item from "./item";
// import Stack from "@mui/material/Stack";

const Section2 = () => {
  return (
    <>
      <div className="section-2">
        <div>
          <h1>Popular Meals</h1>
        </div>
        <div className="cards-meal" style={{flexWrap:"wrap"}}>
          {item.map((item, key) => {
            return (
              <div class="card-meal" key={key}>
                <div class="image">
                  <h1 className="img">{item.Logo}</h1>
                </div>
                <div>
                  <h1 class="title">{item.name}</h1>
                  <span class="price">{item.Price}</span>
                </div>
                <div>
                  <Link to={`/Meals/${item.id}`}><button className="btn">Order Now</button></Link>
                  
                  
                </div>
              </div>
            );
          })}
        </div>
        <div className="Back-Home">
          <Link to="/">
            <button className="button">Back⬅</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Section2;
