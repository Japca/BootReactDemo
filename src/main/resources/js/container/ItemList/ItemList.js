/**
 * Created by cor on 5/28/17.
 *
 */

import React, {Component}from "react";
import {Media, Button, ButtonToolbar, FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import styles from "./itemList.css";
import {connect} from "react-redux";
import {fetchItems} from "../../action/index";
import Modal from "react-modal";

const customStyles = {
    content : {
        width                 : '40%',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
    },
    overlay : {
        backgroundColor   : 'rgba(0, 0, 0, 0.75)'
    }

};


class ItemList extends Component {


    constructor(props) {
        super(props);

        this.state = {
            items: [],
            modalIsOpen: false
        };

    }

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        console.log("render item list");
        return (
            <div className={styles.listClass}>
                { this.renderItemList() }
                { this.renderModal() }
            </div>
        );
    }

    renderItemList = () => {
        let items = this.props.items;
        return (
            items.map(item => {
                return <Media key={item.id} className={styles.itemStyle} onClick={this.handleItemClick}>
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
    };

    handleItemClick = event => {
        this.openModal();
    };

    renderModal = () => {
        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                contentLabel="Edit item"
                style={customStyles}
                >
                <form>
                    <h3 className={styles.modalHeader} id="heading">Edit item</h3>
                    <hr/>
                    <FieldGroup
                        id="formControlsName"
                        type="text"
                        label="Name"
                        placeholder="Enter name"
                    />
                    <FieldGroup
                        id="formControlsTitle"
                        type="text"
                        label="Title"
                        placeholder="Enter title"
                    />
                    <FieldGroup
                        id="formControlsDescription"
                        type="text"
                        label="Description"
                        placeholder="Enter description"
                    />
                    <FieldGroup
                        id="formControlsEmail"
                        type="email"
                        label="Email"
                        placeholder="Enter email"
                    />
                    <ButtonToolbar>
                        <Button bsStyle="default" className="btn pull-right" onClick={() => this.closeModal()}>Close</Button>
                        <Button bsStyle="primary" className="btn pull-right">Submit</Button>
                    </ButtonToolbar>
                </form>
            </Modal>
        );
    };

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal() {
        this.setState({modalIsOpen: false});
    }

}

function FieldGroup({id, label, help, ...props}) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}


function mapStateToProps({items}) {
    return {items};
}

export default connect(mapStateToProps, {fetchItems})(ItemList);



