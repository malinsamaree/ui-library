import React, {ReactNode} from 'react';
import {ChipType} from "./types";
import {ChipWrapper} from "./style";

interface Props {
    children: ReactNode;
    type?: ChipType;
}

export const Chip = ({
    children,
    type=ChipType.DEFAULT
}: Props) => {
    return (
        <ChipWrapper>
            {children}
        </ChipWrapper>
    );
};