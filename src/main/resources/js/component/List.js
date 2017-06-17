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
                debugger;
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
        debugger;
        this.loadItems();
    }

    render() {
        var items = this.state.items;
        debugger;

        return (
            <div>
                <Item.Group>
                    { items.map(item => {
                        return <Item key={item.id}>
                            <Item.Image size='tiny' src={item.itemImage}/>
                            <Item.Content>
                                <Item.Header as='a'>{item.header}</Item.Header>
                                <Item.Meta>{item.meta}</Item.Meta>
                                <Item.Description>
                                    {item.description}
                                    <Image/>
                                </Item.Description>
                                <Item.Extra>{item.extra}</Item.Extra>
                            </Item.Content>
                        </Item>
                    })}
                </Item.Group>
            </div>
        );
    }
}