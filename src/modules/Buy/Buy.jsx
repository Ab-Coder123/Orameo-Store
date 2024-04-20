import React, { useContext } from "react";
import { Usecontext } from "../../components/Context/Usecontext";
import Items from "../../components/BuyItems/BuyItems";
import { useParams } from "react-router";

const Buy = () => {
  const { products } = useContext(Usecontext);
  const { Buyid } = useParams();
  // Filter the product based on Buyid
  const product = products.find((e) => e.id === Number(Buyid));

  return (
    <>
      <Items product={product} />
    </>
  );
};

export default Buy;
