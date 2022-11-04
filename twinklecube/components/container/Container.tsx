import * as React from 'react';
import {Chip, Spinner, Bullet, Overlay} from "../../../src";
import {Routes, Route} from "react-router-dom";
import ChipTwinklecube from "../../../src/components/chip/Chip.twinklecube";
// @ts-ignore
import style from "./style.module.css"

const Container = () => {
    return (
        <div className={style["container-wrapper"]}>
            <Routes>
                <Route path="/chip" element={<ChipTwinklecube />} />
                {/*more components come here*/}
            </Routes>
        </div>
    );
};

export default Container;
