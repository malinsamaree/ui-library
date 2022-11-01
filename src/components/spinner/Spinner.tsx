import React from "react";
import style from "./style.module.css";
import "./styles.css";
import "./sassstyles.scss";
import "./lessstyles.less";

export const Spinner = () => {
    return (
        <div
            className={style["spinner-wrapper"]}
        >
            SPINNER
            <div className="spinner-sub-heading">
                this is a apinner
            </div>
            <div className="spinner-para">malin</div>
            <div className="less-element">malin</div>
        </div>
    );
};
