import * as React from 'react';
import {SideNavWrapper} from "./style";
import {Link} from "react-router-dom";

const SideNav = () => {
    return (
        <SideNavWrapper>
            <nav>
                <ul>
                    <li><Link to="/chip">chip</Link></li>
                    <li><Link to="/spinner">spinner</Link></li>
                </ul>
            </nav>
        </SideNavWrapper>
    );
};

export default SideNav;