/// <reference types="react" />
import { ChipType } from './types';
interface ChipWrapperProps {
    error?: boolean;
    active?: boolean;
    chipType?: ChipType;
}
export declare const ChipWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ChipWrapperProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export {};
