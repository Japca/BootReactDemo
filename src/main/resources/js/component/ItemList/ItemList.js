/**
 * Created by cor on 5/28/17.
 *
 */

import React from "react";
import {Media} from "react-bootstrap";
import styles from "./itemList.css";
import { connect } from "react-redux";

class ItemList extends React.Component {

    render() {
        let items = this.props.items;
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

function mapStateToProps(state) {
     return {
        items: state.items,
    };
}


 export default connect(mapStateToProps)(ItemList);
