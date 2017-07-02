/**
 * Created by cor on 5/28/17.
 *
 */

import React, {Component}from "react";
import { Media } from "react-bootstrap";
import styles from "./itemList.css";
import { connect } from "react-redux";
import { fetchItems } from "../../action/index";

class ItemList extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        return (
            <div className={styles.listClass}>
                {this.renderItemList()}
            </div>
        );
    }

    renderItemList = () => {
        let items = this.props.items;
        return (
            items.map(item => {
                return <Media key={item.id} className={styles.itemStyle} >
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
            })
        );
    }
}

function mapStateToProps({ items }) {
    return { items };
}

export default connect(mapStateToProps, { fetchItems })(ItemList);
