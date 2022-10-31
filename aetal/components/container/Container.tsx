import * as React from 'react';
import {ContainerWrapper} from "./style";
import {Chip, Spinner, Bullet} from "../../../src";
import {Routes, Route} from "react-router-dom";
import ChipAetal from "../../../src/components/chip/Chip.aetal";

const Container = () => {
    return (
        <ContainerWrapper>
            <Routes>
                <Route path="/chip" element={<ChipAetal />} />
                <Route path="/spinner" element={<Spinner />} />
                <Route path="/bullet" element={<Bullet />} />
            </Routes>
        </ContainerWrapper>
    );
};

export default Container;
