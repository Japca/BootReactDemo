import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {ROOT, PAGE_LIST, PAGE_TABLE, PAGE_3, PAGE_4} from '../Layout/Layout';
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
            <div className={[styles.clear, styles.mainNavDiv].join(' ')}>
                <ul className={styles.mainNav}>
                    <div className={styles.reactLogo}><img src="img/reactLogo/reactLogo.png"/></div>
                    <li><a className={this.isSelected(PAGE_LIST)} href={PAGE_LIST}>List</a></li>
                    <li><a className={this.isSelected(PAGE_TABLE)} href={PAGE_TABLE}>Table</a></li>
                    <li><a className={this.isSelected(PAGE_3)} href={PAGE_3}>Page 3</a></li>
                    <li><a className={this.isSelected(PAGE_4)} href={PAGE_4}>page 4</a></li>
                </ul>
            </div>
        );
    }


    isSelected = value => {
        return (value === this.state.activeKey) ? styles.selected : "";
    };
}

export default withRouter(Navigator);




