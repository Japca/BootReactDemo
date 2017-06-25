/* eslint-disable semi */
/**
 * Created by cor on 4/5/17.
 *
 */
import React from "react";
import {Table, thead, tr, th} from 'react-bootstrap';
import { connect } from "react-redux";

class SimpleTable extends React.Component {

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


export default connect(mapStateToProps)(SimpleTable);



