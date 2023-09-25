import React, { useState } from "react";
import { useSelector } from "react-redux";

import { PreviousPage } from "./PreviousPage";
import { NextPage } from "./NextPage";
import cl from "./MyPagination.module.css";

export const MyPagination = () => {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const currentPage = useSelector((store) => store.page.currentPage);

  return (
    <div className={cl.pagination}>
      <PreviousPage
        isFirstPage={isFirstPage}
        setIsFirstPage={setIsFirstPage}
        setIsLastPage={setIsLastPage}
      />
      <div>{currentPage}</div>
      <NextPage
        isLastPage={isLastPage}
        setIsLastPage={setIsLastPage}
        setIsFirstPage={setIsFirstPage}
      />
    </div>
  );
};
