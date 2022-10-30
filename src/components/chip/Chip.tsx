import React, {ReactNode} from 'react';
import {ChipType} from "./types";
import {ChipWrapper} from "./style";
import {Test} from '../test/Test';

interface Props {
    chipType?: ChipType;
    error?: boolean;
    active?: boolean;
    testProp?: boolean;
}

function Chip({
    chipType=ChipType.DEFAULT,
    error,
    active,
    testProp
}: Props) {
    return (
        <ChipWrapper error={error}>
            {testProp && <Test testProp={testProp}>malin</Test>}
        </ChipWrapper>
    );
};

export {Chip};

