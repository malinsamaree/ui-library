import React, {ReactNode} from 'react';
import {ChipType} from "./types";
import {ChipWrapper} from "./style";

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
        <ChipWrapper error={error} active={active} type={type}>
            {children}
        </ChipWrapper>
    );
};