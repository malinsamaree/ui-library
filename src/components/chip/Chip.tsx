import React, {ReactNode} from 'react';
import {ChipType} from "./types";

interface Props {
    children: ReactNode;
    type?: ChipType;
    error?: boolean;
    active?: boolean;
}

export const Chip = ({
    children,
    type=ChipType.DEFAULT,
    error,
    active
}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};