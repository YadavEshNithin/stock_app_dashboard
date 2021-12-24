import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent }) => {
  return (
    <Card>
      <span className="absolute left-4 top-4 text-neutral-400 text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-around">
        <span className="text-4xl 2xl:text-5xl flex items-center">
          ${price}{" "}
          <span className="text-xl 2xl:text-2xl text-neutral-400 m-2">
            (USD)
          </span>
        </span>

        <span className="text-xl 2xl:text-2xl text-lime-500">
          +{change} <span>(+{changePercent}%)</span>
        </span>
      </div>
    </Card>
  );
};

export default Overview;
