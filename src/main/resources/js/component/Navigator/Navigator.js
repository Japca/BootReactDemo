import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {ROOT, PAGE_LIST, PAGE_TABLE, PLAYER, BUBBLE} from '../Layout/Layout';
import styles from './navigator.css'

class Navigator extends Component {

    constructor(props) {
        super(props);
        let {location: {pathname}} = props.history;
        this.state = {
            activeKey: pathname === ROOT ? PAGE_LIST : pathname,
        };
    }

    render() {
        console.log('Navigator');
           return (
            <div className={styles.mainNavDiv}>
                <ul className={styles.mainNav}>
                    <div className={styles.reactLogo}><img src="img/reactLogo/reactLogo.png"/></div>
                    <li><a onClick={() => this.handleSelect(PAGE_LIST)} className={this.isSelected(PAGE_LIST)}>List</a></li>
                    <li><a onClick={() => this.handleSelect(PAGE_TABLE)} className={this.isSelected(PAGE_TABLE)}>Table</a></li>
                    <li><a onClick={() => this.handleSelect(PLAYER)} className={this.isSelected(PLAYER)}>Player</a></li>
                    <li><a onClick={() => this.handleSelect(BUBBLE)} className={this.isSelected(BUBBLE)}>Bubbles</a></li>
                </ul>
            </div>
        );
    }

    isSelected = value => {
         return (value === this.state.activeKey) ? styles.selected : "";
    };

    handleSelect(eventKey)  {
        const {history: { push, add}} = this.props;
        this.setState({activeKey: eventKey});
        switch (eventKey) {
            case PAGE_LIST :
                push(PAGE_LIST);
                break;
            case PAGE_TABLE :
                push(PAGE_TABLE);
                break;
            case PLAYER :
                push(PLAYER);
                break;
            case BUBBLE:
                push(BUBBLE);
                break;
            default :
                add(ROOT);
        }
    };
}

export default withRouter(Navigator);




