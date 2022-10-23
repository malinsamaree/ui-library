import * as React from 'react';
import {Chip} from "./Chip";
import {ChipType} from "./types";

const ChipAetal = () => {
    return (
        <Chip type={ChipType.CLOSE} active={true}>sample chip</Chip>
    );
};

export default ChipAetal;