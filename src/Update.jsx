import React from "react";
import { useGlobalContext } from "./Context";
import { useParams } from "react-router-dom";
const Update = () => {
  const { CarId } = useParams();
  // between the brackets we need to write the field  to import
  // const {  } = useGlobalContext();

  return <div>Update</div>;
};

export default Update;
