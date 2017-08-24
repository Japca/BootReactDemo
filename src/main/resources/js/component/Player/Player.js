
import React from 'react';
import style from './player.css'
// import SplitLayout from './SplitLayout/SplitLayout';

const Player = () => {
    return (
        <div className={style.content}>
            <div className={style.handler}></div>
            <div className={style.leftBox}></div>
            <div className={style.rightBox}></div>
        </div>
    );
};

export default Player;