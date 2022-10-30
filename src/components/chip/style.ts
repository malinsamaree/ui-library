import styled from "@emotion/styled";
import {ChipType} from './types';

interface ChipWrapperProps {
    $error?: boolean;
    $active?: boolean;
    $chipType?: ChipType;
}

export const ChipWrapper = styled.div<ChipWrapperProps>`
    display: inline-flex;
    border: ${(props): string => `1px solid ${props.$error ? 'red' : props.$active ? 'blue' : 'grey'}` };
    border-radius: 100px;
    padding: 10px 20px;
`;