import React from "react";
//components
import Card from "../Card";

type ICards = {
  data: any;
};

const Cards = ({ data }: ICards) => {
  console.log('data', data)
  return (
    <div className="grid grid-cols-1 gap-6 m-7 xl:grid-cols-2">
      {data.map((card: any) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export default Cards;
