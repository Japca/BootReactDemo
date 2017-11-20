import React from 'react';
import styles from "./splitLayout.css";

const SplitLayout = () => {

    return (

        <div className={styles.content}>
            <div className={styles.leftBox}></div>
            <div className={styles.rightBox}></div>
        </div>
    );


};

export default SplitLayout;