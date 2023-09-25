import React from "react";
import { BsPencil } from "react-icons/bs";

import cl from "./ButtonStyles/ChangeTodoButton.module.css";

export const ChangeTodoButton = ({ onClick }) => {
  return <BsPencil onClick={onClick} className={cl.changeButton} />;
};
