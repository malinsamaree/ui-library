import { ReactNode } from 'react';
import { ChipType } from "./types";
interface Props {
    children: ReactNode;
    type?: ChipType;
    error?: boolean;
    active?: boolean;
}
export declare const Chip: ({ children, type, error, active }: Props) => JSX.Element;
export {};
