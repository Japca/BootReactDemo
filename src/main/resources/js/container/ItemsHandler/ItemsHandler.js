import React, { Component } from 'react';
import {Button, FormControl} from "react-bootstrap";
import styles from './itemsHandler.css';
import { connect } from 'react-redux';
import { sortBy }  from '../../action/index';

export const SORT_ASC = 'asc';
export const SORT_DESC = 'dsc';
export const CREATED = 'created';

const ARROW_UP = 'arrow-up';
const ARROW_DOWN = 'arrow-down';

const CHARACTER_PROPERTIES = [CREATED, 'name', 'profession', 'description', 'email'];


export const Sort = {
    order: SORT_DESC,
    type: CREATED
};

class ItemsHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected : ARROW_UP
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState;
    }

    render() {
        console.log('render item Handler');
        return (
            <div className={styles.handler}>
                <div className={styles.handlerContent}>
                    <Button className={styles.itemMargin} title="Add Character" bsStyle="success" onClick={() => this.props.newItem({})}>
                        <i className='fa fa-plus fa-lg'/>
                    </Button>
                    <form className={styles.itemMargin}>
                        <FormControl onChange={this.onSelectChange.bind(this)} componentClass="select" placeholder="select">
                            { CHARACTER_PROPERTIES.map(function (key) {
                                return (
                                    <option key={key} value={key}>{key}</option>
                                );
                            })
                            }
                        </FormControl>
                    </form>
                    <div className={styles.arrowDiv}>
                        <div onClick={() => this.sort({...Sort, order: SORT_ASC})} className={[styles.arrowUp, this.isSelected(ARROW_UP)].join(' ')}>
                            <i className="fa fa-caret-up fa-2x"/>
                        </div>
                        <div onClick={() => this.sort({...Sort, order: SORT_DESC})} className={[styles.arrowDown, this.isSelected(ARROW_DOWN)].join(' ')}>
                            <i className="fa fa-caret-down fa-2x"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onSelectChange(event) {
        this.sort({...Sort, type: event.target.value})
    }

    sort(sort) {
        this.setState({ selected :sort.order === SORT_ASC ? ARROW_UP : ARROW_DOWN });
        this.props.sortBy(sort);
    }

    isSelected = value => {
        return (value === this.state.selected) ? styles.selected: styles.arrow;
    };
}

function mapStateToProps({ characters }) {
    return { characters };
}

export default connect(mapStateToProps, { sortBy })(ItemsHandler);


