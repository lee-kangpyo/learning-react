import React from "react";
import StarRating from "./StarRating";

export default function Color({title, color, rating}){
  console.log(rating);
  return (
      <section>
        <h1>{title}</h1>
        <div style={{height:50, backgroundColor:color}} />
        <StarRating Stars = {rating} />
      </section>
  )
}
