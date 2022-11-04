import React from 'react';
import style from './style.module.scss';
import {OverlayHeader} from './style';

interface Props {
    active ?: boolean;
}

export const Overlay = (
    {
        active
    }: Props
) => {
    return (
        <>
            <OverlayHeader active={active}>malin</OverlayHeader>
            <div className={style["overlay-wrapper"]}>
                overlay
                <div className="bullet-wrapper">aa</div>
            </div>
        </>
    );
};