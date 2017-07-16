import React from 'react';
import { Button } from "react-bootstrap";
import styles from './itemsHandler.css';
import FontAwesome from 'react-fontawesome';


const ItemsHandler = props => {
    return (
        <div className={styles.handler} >
        <div className={styles.handlerContent}>
            <Button className={styles.addButton} bsStyle="success" onClick={() => props.newItem({})}>
                <i className='fa fa-plus fa-lg'/>
            </Button>
            <div className={styles.arrowDiv}>
                <div className={styles.arrowUp}><i className="fa fa-caret-up fa-2x"/></div>
                <div className={styles.arrowDown}><i className="fa fa-caret-down fa-2x"/></div>
            </div>
        </div>
        </div>
    );
};

export default ItemsHandler;

