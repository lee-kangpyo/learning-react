import React from "react";
import StarRating from "./StarRating";
import {FaTrash} from "react-icons/fa"

export default function Color({id, title, color, rating, onRemove = f => f}){
  console.log(rating);
  return (
      <section>
        <h1>{title}</h1>
        <button onClick={()=>onRemove(id)}>
          <FaTrash />
        </button>
        <div style={{height:50, backgroundColor:color}} />
        <StarRating Stars = {rating} />
      </section>
  )
}
