import React, { Component } from 'react';
import styles from './Bubble.css';


const canvas = document.getElementById('bubbleCanvas');

class Bubble extends Component {

    render() {
        return (
            <div>
                <canvas className={styles.bubbleCanvas}>
                    ctx.arc(20, 20, 20, 0, Math.PI * 2, false);
                    ctx.fill();
                </canvas>
            </div>
        );
    }

}

export default Bubble;