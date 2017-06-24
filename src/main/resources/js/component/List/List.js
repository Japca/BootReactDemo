/**
 * Created by cor on 5/28/17.
 *
 */

import React from "react";
import axios from "axios";
import {Media} from "react-bootstrap";
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
            <div className={styles.listClass}>
                    { items.map(item => {
                        return <Media key={item.id} className={styles.itemStyle}>
                            <Media.Left>
                             <img width={128} height={128} src={item.itemImage}/>
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>{item.header}</Media.Heading>
                                <p>{item.meta}</p>
                                <p>{item.description}</p>
                                <p>{item.extra}</p>
                            </Media.Body>
                        </Media>
                    })}
            </div>
        );
    }
}

