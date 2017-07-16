import React from 'react';
import { Button } from "react-bootstrap";
import styles from './itemsHandler.css';

const ItemsHandler = props => {
    return (
        <div className={styles.handle}>
            <Button className={styles.addButton} bsStyle="success" onClick={() => props.newItem({})}>
                <span className={styles.inline}> <i className='fa fa-plus fa-lg'/> </span>
            </Button>
            <div className={styles.inline}>
                <div className={styles.arrowUp}><i className="fa fa-caret-up fa-2x"/></div>
                <div className={styles.arrowDown}><i className="fa fa-caret-down fa-2x"/></div>
            </div>
        </div>
    );
};

export default ItemsHandler;

