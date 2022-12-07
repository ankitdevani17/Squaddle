import React from "react";

const temp = () => {
  const arr = [
    {
      name: "A",
    },
    {
      name: "B",
    },

  ];

  const tempstr = "abcd heloo"

  tempstr.split("")
  return <div>{arr.filter((item) => item.name === "B")}</div>;
};

export default temp;
