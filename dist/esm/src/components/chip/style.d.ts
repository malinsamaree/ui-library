/// <reference types="react" />
import { ChipType } from './types';
interface ChipWrapperProps {
    $error?: boolean;
    $active?: boolean;
    $chipType?: ChipType;
}
export declare const ChipWrapper: import("styled-components").IStyledComponent<"web", "div", import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ChipWrapperProps> & object;
export {};
