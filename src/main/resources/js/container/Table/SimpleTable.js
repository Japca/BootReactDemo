/* eslint-disable semi */
/**
 * Created by cor on 4/5/17.
 *
 */
import React, {Component} from "react";
import {Table, thead, tr, th} from 'react-bootstrap';
import {bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchItems } from "../../action/index";

class SimpleTable extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        let items = this.props.items;
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <th>Name</th>
                    <th>Position</th>
                    <th>About</th>
                    <th>Extra</th>
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
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchItems }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);




