import * as React from 'react';
// @ts-ignore
import style from "./style.module.css";

const Header = () => {
    return (
        <div className={style["header-wrapper"]}>
            <h1><span>TWINKL</span>e[cube] ui</h1>
            <h3>
                very simple library to
                <span> create </span>,
                <span> bundle </span>
                and
                <span> export </span>
                react UIs (typescript enabled)
            </h3>
        </div>
    );
};

export default Header;