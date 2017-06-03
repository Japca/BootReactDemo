/**
 * Created by cor on 5/28/17.
 */

import React from "react";
import {Link} from "react-router-dom";

export default class Navigator extends React.Component {

    render() {
        return (

            <div id="navigator">
                <ul>
                    <li>
                        <Link to="table">
                            <code>table</code>
                        </Link>
                    </li>
                    <li>
                        <Link to="list">
                            <code>list</code>
                        </Link>
                    </li>
                    <li>
                        <Link to="card">
                            <code>cards</code>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

