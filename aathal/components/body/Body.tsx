import * as React from 'react';
import {BodyWrapper} from "./style";
import SideNav from "../side-nav/SideNav";
import Container from "../container/Container";

const Body = () => {
    return (
        <BodyWrapper>
            <SideNav />
            <Container />
        </BodyWrapper>
    );
};

export default Body;