/**
 * Created by cor on 5/28/17.
 *
 */

import React from "react";
import SimpleTable from "./../SimpleTable";
import List from "./../List";
import {Route, Switch} from "react-router-dom";
export default class Content extends React.Component {

    render() {
        return (
            <div id="content" className="ui container">
                <Switch>
                    <Route exact path='/' component={List}/>
                    <Route path='/list' component={List}/>
                    <Route path='/table' component={SimpleTable}/>

                </Switch>
            </div>
        );
    }

}
