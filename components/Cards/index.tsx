import React from 'react'
//components
import Card from "../Card"
//constants
import {cards} from "../../constants/cards";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 m-7 xl:grid-cols-2">
       {cards.map((card)=> (
           <Card key={card.id} data={card} />
       ))}
    </div>
  )
}

export default Cards