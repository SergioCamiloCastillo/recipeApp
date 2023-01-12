import React from "react";
import "../../styles/cardrecipe.css";
import DescripcionRecipe from "../DescripcionRecipe";

export default function CardRecipe(data: any) {
 
  return (
    <div className="card-recipe">
      <img
        className="image-card-recipe center"
        src={data?.values?.image}
        alt="productsimage"
      />
      <div className="center box-description-recipe">
        <div>
          <span className="first-word-title-recipe">{data?.values?.title}</span>
        </div>
        <div className="calification">
          <div>
            <img
              src="../../star.png"
              alt="calification"
              className="icon-start"
            />
            <span className="number-calification">&nbsp;&nbsp;5.0</span>
          </div>
          <div>
            <img
              src="../../heart.png"
              alt="calification"
              className="icon-heart"
            />
          </div>
        </div>
      </div>
      <div className="description-recipe">
        <DescripcionRecipe />
      </div>
    </div>
  );
}
