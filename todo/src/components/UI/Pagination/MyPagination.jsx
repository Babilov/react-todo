import React, { useState } from "react";
import { PreviousPage } from "./PreviousPage";
import { NextPage } from "./NextPage";
import { useSelector } from "react-redux";
import cl from "./MyPagination.module.css"

export const MyPagination = () => {
    const currentPage = useSelector(store => store.page.currentPage)
    const [isFirstPage, setIsFirstPage] = useState(true)
    const [isLastPage, setIsLastPage] = useState(false)
    return (
        <div className={cl.pagination}>
            <PreviousPage isFirstPage={isFirstPage} setIsFirstPage={setIsFirstPage} setIsLastPage={setIsLastPage}></PreviousPage>
            <div>{currentPage}</div>
            <NextPage isLastPage={isLastPage} setIsLastPage={setIsLastPage} setIsFirstPage={setIsFirstPage}></NextPage>
        </div>
    )
}