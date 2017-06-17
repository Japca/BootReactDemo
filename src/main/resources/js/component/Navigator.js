import React from "react";
import {Link} from "react-router-dom";

export default class Navigator extends React.Component {

     render() {
        return (

            <div id="navigator" >
                <div className="ui secondary pointing menu">
                </div>
                <ul >
                    <li className="active item">
                        <Link to="table" >
                            <code>table</code>
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="list" >
                            <code>list</code>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

