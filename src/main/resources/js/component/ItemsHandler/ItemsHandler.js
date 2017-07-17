import React, { Component } from 'react';
import {Button, FormControl} from "react-bootstrap";
import styles from './itemsHandler.css';
import { connect } from 'react-redux';
import { sortBy }  from '../../action/index';

export const SORT_ASC = 'asc';
export const SORT_DESC = 'dsc';

export const CHARACTER_PROPERTIES = ['created', 'name', 'profession', 'description', 'email'];

class ItemsHandler extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState;
    }

    render() {
        console.log('render item Handler');
        return (
            <div className={styles.handler}>
                <div className={styles.handlerContent}>
                    <Button className={styles.itemMargin} bsStyle="success" onClick={() => this.props.newItem({})}>
                        <i className='fa fa-plus fa-lg'/>
                    </Button>
                    <form className={styles.itemMargin}>
                        <FormControl onSelect={() => console.log('sss')} componentClass="select" placeholder="select">
                            { CHARACTER_PROPERTIES.map(function (key) {
                                return (
                                    <option key={key} value="other">{key}</option>
                                );
                            })
                            }
                        </FormControl>
                    </form>
                    <div className={styles.arrowDiv}>
                        <div onClick={() => this.sort({order: SORT_ASC})} className={styles.arrowUp}><i
                            className="fa fa-caret-up fa-2x"/></div>
                        <div onClick={() => this.sort({order: SORT_DESC})} className={styles.arrowDown}><i
                            className="fa fa-caret-down fa-2x"/></div>
                    </div>
                </div>
            </div>
        );
    }

    sort(sort) {
        this.props.sortBy(sort);
    }
}

function mapStateToProps({ characters }) {
    return { characters };
}

export default connect(mapStateToProps, { sortBy })(ItemsHandler);


