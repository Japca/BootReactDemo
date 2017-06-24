import React from "react";
import {Nav, NavItem} from "react-bootstrap";
import {NavLink} from "react-router-dom";


export default class Navigator extends React.Component {

    constructor() {
        super();
        this.state = {
            activeKey: 1
        };
    }

    handleSelect = eventKey => {
           debugger;
           this.setState({activeKey: eventKey});
           debugger;
    };


    render() {
        return (
            <div id="navigator">
                <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    <NavItem eventKey={1} href="/list">
                        <NavLink to="list">List</NavLink>
                    </NavItem>
                    <NavItem eventKey={2} href="/table">
                        <NavLink to="table">Table</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}




