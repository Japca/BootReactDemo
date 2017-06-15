/**
 * Created by cor on 5/28/17.
 */

import React from "react";
import axios from "axios";
import {Image, Item} from "semantic-ui-react";

export default class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
        };
    }

    loadItems = () => {
        return axios.get('http://localhost:8080/items')
            .then(response => {
                this.setState({ items:response.data });
            })
            .catch(error => {
                console.log("Error!");
                console.log(error);
            })
            .then(response => {
                console.log("Finally");
                console.log(response);
            });

    };

    componentDidMount() {
        this.loadItems();
    }

    render() {
        var items = this.state.items;

        return (
            <div>
                <Item.Group>
                    { items.map(item => {
                        return < Item >
                            < Item.Image size='tiny'/>
                            <Item.Content>
                                <Item.Header as='a'>{item.title}</Item.Header>
                                <Item.Meta>{item.content}</Item.Meta>
                                <Item.Description>
                                    <Image/>
                                </Item.Description>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                    })}
                </Item.Group>
            </div>
        );
    }
}