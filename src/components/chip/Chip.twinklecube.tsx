import * as React from 'react';
import {Chip} from "./Chip";
import {ChipType} from "./types";

const ChipTwinklecube = () => {
    return (
        <Chip type={ChipType.CLOSE} active={true}>sample chip</Chip>
    );
};

export default ChipTwinklecube;