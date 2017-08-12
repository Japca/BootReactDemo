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
            <div className={styles.mainNavDiv}>
                <ul className={styles.mainNav}>
                    <div className={styles.reactLogo}><img src="img/reactLogo/reactLogo.png"/></div>
                    <li><a onClick={() => this.handleSelect(PAGE_LIST)} className={this.isSelected(PAGE_LIST)}>List</a></li>
                    <li><a onClick={() => this.handleSelect(PAGE_TABLE)} className={this.isSelected(PAGE_TABLE)}>Table</a></li>
                    <li><a onClick={() => this.handleSelect(PAGE_3)} className={this.isSelected(PAGE_3)}>Page 3</a></li>
                    <li><a onClick={() => this.handleSelect(PAGE_4)} className={this.isSelected(PAGE_4)}>page 4</a></li>
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
            case PAGE_3 :
                push(PAGE_3);
                break;
            case PAGE_4:
                push(PAGE_4);
                break;
            default :
                add(ROOT);
        }
    };
}

export default withRouter(Navigator);




