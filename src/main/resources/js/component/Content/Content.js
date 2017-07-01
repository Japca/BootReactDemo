/**
 * Created by cor on 5/28/17.
 *
 */

import React from "react";
import SimpleTable from "../../container/Table/SimpleTable";
import ItemList from "../../container/ItemList/ItemList";
import {Route, Switch} from "react-router-dom";
import styles from "./content.css";

export default class Content extends React.Component {

    render() {
        return (
            <div id="content" className={styles.contentClass}>
                <Switch>
                    <Route exact path='/' component={ItemList}/>
                    <Route path='/list' component={ItemList}/>
                    <Route path='/table' component={SimpleTable}/>
                </Switch>
            </div>
        );
    }

}
