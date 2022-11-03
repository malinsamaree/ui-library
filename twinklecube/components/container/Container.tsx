import * as React from 'react';
import {ContainerWrapper} from "./style";
import {Chip, Spinner, Bullet, Overlay} from "../../../src";
import {Routes, Route} from "react-router-dom";
import ChipTwinklecube from "../../../src/components/chip/Chip.twinklecube";

const Container = () => {
    return (
        <ContainerWrapper>
            <Routes>
                <Route path="/chip" element={<ChipTwinklecube />} />
                <Route path="/spinner" element={<Spinner />} />
                <Route path="/bullet" element={<Bullet />} />
                <Route path="/overlay" element={<Overlay />} />
            </Routes>
        </ContainerWrapper>
    );
};

export default Container;
