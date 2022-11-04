import styled from "styled-components";

interface Props {
    active?: boolean;
}

export const OverlayHeader = styled.div<Props>`
    background: green;
    color: ${props => props.active ? 'white' : 'black'};
    font-size: 36px;
    padding: 50px;
    margin: 10px 0;
`;
