import styled from "styled-components";

interface ChipWrapperProps {
    error?: boolean;
    active?: boolean;
}

export const ChipWrapper = styled.div<ChipWrapperProps>`
    display: inline-flex;
    border: ${(props): string => `1px solid ${props.error ? 'red' : props.active ? 'blue' : 'grey'}` };
    border-radius: 100px;
    padding: 10px 20px;
`;