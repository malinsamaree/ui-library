import * as React from 'react';
import {Chip} from "./Chip";
import {ChipType} from "./types";

const ChipAetal = () => {
    return (
        <Chip chipType={ChipType.CLOSE} error={true} testProp={true} />
    );
};

export default ChipAetal;