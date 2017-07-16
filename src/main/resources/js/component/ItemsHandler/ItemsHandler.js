import React from 'react';
import { Button } from "react-bootstrap";
import styles from './itemsHandler.css';

export const SORT_ASC = 'asc';
export const SORT_DESC = 'dsc';


const ItemsHandler = props => {
    console.log('render item Handler');
    return (
        <div className={styles.handler} >
        <div className={styles.handlerContent}>
            <Button className={styles.addButton} bsStyle="success" onClick={() => props.newItem({})}>
                <i className='fa fa-plus fa-lg'/>
            </Button>
            <div className={styles.arrowDiv}>
                <div onClick={() => props.sort({order: SORT_ASC})} className={styles.arrowUp}><i className="fa fa-caret-up fa-2x"/></div>
                <div onClick={() => props.sort({order: SORT_DESC})} className={styles.arrowDown}><i className="fa fa-caret-down fa-2x"/></div>
            </div>
        </div>
        </div>
    );
};

export default ItemsHandler;

