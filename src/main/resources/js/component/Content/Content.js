/**
 * Created by cor on 5/28/17.
 */

import React from "react";
import Table from "./../Table";
import Card from "./../Card";
import List from "./../List";
import {Route, Switch} from "react-router-dom";
export default class Content extends React.Component {


    render() {
        return (
            <div id="content" className="ui container">
                <Switch>
                    <Route path='/list' component={List}/>
                    <Route path='/table' component={Table}/>
                    <Route path='/card' component={Card}/>
                    <Route path='/' component={List}/>
                </Switch>
            </div>
        );
    }

}
