import * as React from 'react';
import {Link} from "react-router-dom";
//@ts-ignore
import style from "./style.module.css";

const SideNav = () => {
    return (
        <div className={style["side-nav-wrapper"]}>
            <nav>
                <h4>Atoms</h4>
                    <ul>
                        <li><Link to="/chip">chip</Link></li>
                        <li><Link to="/spinner">spinner</Link></li>
                        <li><Link to="/bullet">bullet</Link></li>
                        <li><Link to="/overlay">overlay</Link></li>
                    </ul>
                <h4>Molecules</h4>
                <ul>
                    <li><Link to="/chip">chip</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
