import React from 'react';
import style from './style.module.scss';
import {OverlayHeading} from './style';

export const Overlay = () => {
    return (
        <>
            <OverlayHeading>malin</OverlayHeading>
            <div className={style["overlay-wrapper"]}>
                overlay
                <div className="bullet-wrapper">aa</div>
            </div>
        </>
    );
};