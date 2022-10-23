import * as React from 'react';
import {HeaderWrapper, Title, Description, DescriptionSpan, TitleSpan} from "./style";

const Header = () => {
    return (
        <HeaderWrapper>
            <Title>(<TitleSpan>ä</TitleSpan>|e)t al.</Title>
            <Description>
                very simple library to
                <DescriptionSpan> create </DescriptionSpan>,
                <DescriptionSpan> bundle </DescriptionSpan>
                and
                <DescriptionSpan> export </DescriptionSpan>
                react-typescript UIs
            </Description>
        </HeaderWrapper>
    );
};

export default Header;