import { ReactNode } from 'react';
import { ChipType } from "./types";
interface Props {
    children?: ReactNode;
    chipType?: ChipType;
    error?: boolean;
    active?: boolean;
    testProp?: boolean;
}
export declare const Chip: ({ children, chipType, error, active, testProp }: Props) => JSX.Element;
export {};
