import * as React from 'react';
import {HeaderWrapper, Title, Description, DescriptionSpan, TitleSpan} from "./style";

const Header = () => {
    return (
        <HeaderWrapper>
            <Title><TitleSpan>TWINKL</TitleSpan>e[cube]</Title>
            <Description>
                very simple library to
                <DescriptionSpan> create </DescriptionSpan>,
                <DescriptionSpan> bundle </DescriptionSpan>
                and
                <DescriptionSpan> export </DescriptionSpan>
                react UIs (typescript / styled-components enabled)
            </Description>
        </HeaderWrapper>
    );
};

export default Header;