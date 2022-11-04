import styled from "styled-components";
import {ChipType} from "./types";

interface ChipWrapperProps {
    type?: ChipType;
    error?: boolean;
    active?: boolean;
}

export const ChipWrapper = styled.div<ChipWrapperProps>`
    padding: 5px 15px;
    display: inline-flex;
    border-radius: 8px;
    border: ${props => `2px solid ${props.error ? '#A04000' : props.active ? '#5F9EA0' : '#333333'}`}
    font-size: ${props => props.type === ChipType.CLOSE ? '12' : props.type === ChipType.MENU ? '24' : '16'}px;
    cursor: pointer;
`;