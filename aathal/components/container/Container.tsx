import * as React from 'react';
import {ContainerWrapper} from "./style";
import {Chip, Spinner} from "../../../src";
import {Routes, Route} from "react-router-dom";
import ChipAathal from "../../../src/components/chip/Chip.aathal";

const Container = () => {
    return (
        <ContainerWrapper>
            <Routes>
                <Route path="/chip" element={<ChipAathal />} />
                <Route path="/spinner" element={<Spinner />} />
            </Routes>
        </ContainerWrapper>
    );
};

export default Container;