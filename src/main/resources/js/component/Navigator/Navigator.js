import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { ROOT, PAGE_LIST, PAGE_TABLE } from "../Layout/Layout"

class Navigator extends Component {

    constructor(props) {
        super(props);
        let { location : { pathname } } = props.history;
        this.state = {
            activeKey: pathname === ROOT ? PAGE_LIST : pathname
        };
    }

    render() {
        console.log("Navigator");
        return (
            <div id="navigator">
                <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    <NavItem eventKey={PAGE_LIST}>List</NavItem>
                    <NavItem eventKey={PAGE_TABLE}>Table</NavItem>
                </Nav>
            </div>
        );
    }

    handleSelect = eventKey => {
        const { history: { push }} = this.props;
        this.setState({activeKey: eventKey});

        switch (eventKey) {
            case PAGE_LIST :
                push(PAGE_LIST);
                break;
            case PAGE_TABLE :
                push(PAGE_TABLE);
                break;
            default :
                push(ROOT);
        }
    };
}

export default withRouter(Navigator)




