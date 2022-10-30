import React, {ReactNode} from 'react';
import {ChipType} from "./types";
import {ChipWrapper} from "./style";
import {Test} from '../test/Test';

interface Props {
    children?: ReactNode;
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
        <div>
            {children && children}
            {testProp && <Test testProp={testProp}>malin</Test>}
        </div>
    );
};