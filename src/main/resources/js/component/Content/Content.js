/**
 * Created by cor on 5/28/17.
 *
 */

import React from "react";
import SimpleTable from "../../container/Table/SimpleTable";
import ItemList from "../../container/ItemList/ItemList";
import {Route, Switch} from "react-router-dom";
import styles from "./content.css";
import {ROOT, PAGE_LIST, PAGE_TABLE} from "../Layout/Layout";


export default class Content extends React.Component {

    render() {
        console.log("content");
        return (
            <div id="content" className={styles.contentClass}>
                <Switch>
                    <Route path={PAGE_LIST} component={ItemList}/>
                    <Route path={PAGE_TABLE} component={SimpleTable}/>
                    <Route exact path={ROOT} component={ItemList}/>
                </Switch>
            </div>
        );
    }



}
