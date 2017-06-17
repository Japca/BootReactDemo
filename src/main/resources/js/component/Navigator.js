import React from "react";
import {Link} from "react-router-dom";

export default class Navigator extends React.Component {

     render() {
        return (

            <div id="navigator" >
                <div class="ui secondary pointing menu">
                </div>
                <ul >
                    <li class="active item">
                        <Link to="table" >
                            <code>table</code>
                        </Link>
                    </li>
                    <li class="item">
                        <Link to="list" >
                            <code>list</code>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

