import React, { Component } from 'react';
import styles from './Bubble.css';


class Bubble extends Component {

    render() {
        return (
            <div>
                <canvas className={styles.canvas}>
                </canvas>
            </div>
        );
    }

}

export default Bubble;