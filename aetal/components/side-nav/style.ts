import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const SideNavWrapper = styled.div`
    width: 200px;
    border-right: solid 1px #eaeaea;
    padding: 30px;
    background-color: #eaeaea;
    color: #333333;
`;

export const H4 = styled.h4`
    margin-top: 30px;
    margin-bottom: 10px;
`

export const UnorderedList = styled.ul`
    list-style-type: none;
`;

export const List = styled.li`
    margin-left: 10px;
    margin-bottom: 5px;
`;

export const RouterLink = styled(Link)`
    text-decoration: none;
    color: #999999;
    &: hover {
        color: #333333
    }
`