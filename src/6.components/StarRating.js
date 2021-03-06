import React, { useState } from "react";
import { FaStar, FaHome } from "react-icons/fa";

const createArray = length => [...Array(length)];


export default function StarRating({
      style = {},
      totalStars = 5,
      Stars = 0,
      onRate = f => f})
{

  const [selectedStars, setSelectedStars] = useState(Stars)


  const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color = {selected ? "red" : "grey"} onClick={onSelect} />
  );

  const onsel = (num) => {
    onRate(num);
    setSelectedStars(num);
  }

  return (
    <div style={{ padding:"5px", ...style}}>
      {createArray(totalStars).map((n,i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onsel(i+1)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </div>
  )
}
