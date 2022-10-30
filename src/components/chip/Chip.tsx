import React, {ReactNode} from 'react';
import {ChipType} from "./types";
import {ChipWrapper} from "./style";
import {Test} from '../test/Test';

interface Props {
    children: ReactNode;
    chipType?: ChipType;
    error?: boolean;
    active?: boolean;
    testProp?: boolean;
}

export const Chip = ({
    children,
    chipType=ChipType.DEFAULT,
    error,
    active,
    testProp
}: Props) => {
    return (
        <ChipWrapper $error={error} $active={active} $chipType={chipType}>
            {children}
            {testProp && <Test testProp={testProp}>malin</Test>}
        </ChipWrapper>
    );
};