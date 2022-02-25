
import React from "react";
import Color from "./Color"

export default function ColorList({colors=[], onRemoveColor = f => f, onRateColor = f => f}){
  if (!colors.length) return <div>표시할 색이 없습니다.(색을 추가해 주세요)</div>

  return (
    <div>
      {
        colors.map(color => <Color Key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor} />)
      }
    </div>
  )
}
