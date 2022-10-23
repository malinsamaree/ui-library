import React from 'react';
import {Type} from "./types";

interface Props {
    type?: Type;
}

export const Chip = ({
    type=Type.DEFAULT
}: Props) => {
    return (
        <div>
            CHIP -
            {type}
        </div>
    );
};