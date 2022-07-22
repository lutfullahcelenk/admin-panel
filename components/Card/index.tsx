import Image from "next/image";
import React from "react";

type ICard = {
  data: any;
};

const Card = ({ data }: ICard) => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div>
        <Image src="/assets/wallet.png" alt="wallet" width="40" height="40" />
        <div className="text-xl font-bold text-gray-700">{data.title}</div>
        <div className="my-3 text-sm font-bold text-gray-400 uppercase">
          {data.tag}
        </div>
        <div className="flex items-end mb-3">
          <span className="mr-2 text-3xl font-bold">$ {data.price}</span>
          <span
            className={`${
              data.percentage > 0 ? "bg-green-500" : "bg-red-500"
            } text-white p-1 rounded-full text-sm font-bold`}
          >
            {data.percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
