import React from "react";
// @ts-ignore
import style from "./style.module.css";
import "./styles.css";
import "./sassstyles.scss";

export const Spinner = () => {
    return (
        <div className={style["spinner-wrapper"]}>
            SPINNER
            <div className="spinner-sub-heading">
                this is a apinner
            </div>
            <div className="spinner-para">malin</div>
        </div>
    );
};
