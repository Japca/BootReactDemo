/* eslint-disable semi */
/**
 * Created by cor on 4/5/17.
 *
 */
import React, {Component} from "react";
import {Table, thead, tr, th} from 'react-bootstrap';
import {connect} from "react-redux";
import {fetchItems} from "../../action/index";

class SimpleTable extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        let items = this.props.items;
        return (
            <div>
                {this.renderTable()}
            </div>
        );
    }

    renderTable = () => {
        let items = this.props.items;
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>About</th>
                    <th>Extra</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => {
                    return <tr key={item.id}>
                        <td>{item.header}</td>
                        <td>{item.meta}</td>
                        <td>{item.description}</td>
                        <td>{item.extra}</td>
                    </tr>
                })}
                </tbody>
            </Table>
        );
    };
}

function mapStateToProps({items}) {
    return { items };
}

export default connect(mapStateToProps, { fetchItems } )(SimpleTable);




