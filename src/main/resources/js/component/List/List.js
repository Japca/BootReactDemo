/**
 * Created by cor on 5/28/17.
 *
 */

import React from "react";
import axios from "axios";
import {Image, Item} from "semantic-ui-react";
import styles from "./list.css";

export default class Card extends React.Component {

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
                this.setState({ items:response.data });
            })
            .catch(error => {
                console.log("Error!");
                console.log(error);
            })
            .then(response => {
                console.log(response);
            });

    }

    render() {
        let items = this.state.items;
        return (
            <div>
                <Item.Group>
                    { items.map(item => {
                        return <Item key={item.id} className={styles.itemStyle}>
                            <Item.Image size='tiny' src={item.itemImage}/>
                            <Item.Content className={styles.itemStyle}>
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