import React from 'react'
import IngredientsList from "./IngredientsList"
import Instructions from "./instructions"

export default function Recipe({name, ingredients, steps}){
  return (
    <section id={name.toLowerCase().replace(/ /j, "-")}>
      <h1>{name}</h1>
      <IngredientsList list={ingredient} />
      <Instructions title="조리 절차" steps={steps} />
    </section>
  )
}
