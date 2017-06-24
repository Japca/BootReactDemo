/* eslint-disable semi */
/**
 * Created by cor on 4/5/17.
 *
 */
import React from "react";
import axios from "axios"
import {Icon, Label, Menu, Table} from 'semantic-ui-react';

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
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Position</Table.HeaderCell>
                            <Table.HeaderCell>About</Table.HeaderCell>
                            <Table.HeaderCell>Extra</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {items.map(item => {
                            return <Table.Row>
                                <Table.Cell>{item.header}</Table.Cell>
                                <Table.Cell>{item.meta}</Table.Cell>
                                <Table.Cell>{item.description}</Table.Cell>
                                <Table.Cell>{item.extra}</Table.Cell>
                            </Table.Row>
                        })}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

