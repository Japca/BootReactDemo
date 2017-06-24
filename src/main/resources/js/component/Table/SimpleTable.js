/* eslint-disable semi */
/**
 * Created by cor on 4/5/17.
 *
 */
import React from "react";
import axios from "axios"
import {Table, thead, tr, th} from 'react-bootstrap';

export default class SimpleTable extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems() {
        return axios.get('http://localhost:8080/items')
            .then(response => {
                this.setState({items: response.data});
            })
            .catch(error => {
                console.log("Error!");
                console.log(error);
            })
            .then(response => {
                console.log("Finally");
                console.log(response);
            });

    }

    render() {
        let items = this.state.items;
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



