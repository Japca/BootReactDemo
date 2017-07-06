/**
 * Created by cor on 5/28/17.
 *
 */

import React, {Component}from "react";
import {Media, Button, ButtonToolbar, FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import styles from "./itemList.css";
import {connect} from "react-redux";
import { fetchCharacters, editCharacter } from "../../action/index";
import Modal from "react-modal";
import {Field, reduxForm} from "redux-form";


const customStyles = {
    content: {
        width: '40%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }

};

class ItemList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            modalIsOpen: false
        };

    }

    componentDidMount() {
        this.props.fetchCharacters();
    }

    render() {
        console.log("render item list");
        return (
            <div className={styles.listClass}>
                { this.renderCharactersList() }
                { this.renderModal() }
            </div>
        );
    }

    renderCharactersList = () => {
        let characters = this.props.characters;
        return (
            characters.map(character => {
                return <Media key={character.id} className={styles.itemStyle} onClick={() => this.openModal()}>
                    <Media.Left>
                        <img width={128} height={128} src={character.image}/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{character.name}</Media.Heading>
                        <p>{character.profession}</p>
                        <p>{character.description}</p>
                        <p>{character.email}</p>
                    </Media.Body>
                </Media>
            })
        );
    };

    renderModal = () => {
        const { handleSubmit } = this.props;
        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                contentLabel="Edit item"
                style={customStyles}
            >
                <form onSubmit={handleSubmit(this.updateCharacter.bind(this))}>
                    <h3 className={styles.modalHeader} id="heading">Edit item</h3>
                    <hr/>

                    <Field name="name"
                           component={this.renderField}
                           props = {this.inputProps("formControlsName", "Name", {type:"text", placeholder: "Enter Name"})}
                    />
                    <Field name="profession"
                           component={this.renderField}
                           props = {this.inputProps("formControlsProfession", "profession", {type:"text", placeholder: "Enter Profession"})}
                    />
                    <Field name="description"
                           component={this.renderField}
                           props = {this.inputProps("formControlsDescription", "Description", {type:"text", placeholder: "Enter Description"})}
                    />
                    <Field name="email"
                           component={this.renderField}
                           props = {this.inputProps("formControlsEmail", "Email", {type:"text", placeholder: "Enter Email"})}
                    />
                    <ButtonToolbar>
                        <Button bsStyle="default" className="btn pull-right" type="submit" onClick={() => this.closeModal()}>Close</Button>
                        <Button type="submit" bsStyle="primary" className="btn pull-right">Submit</Button>
                    </ButtonToolbar>
                </form>
            </Modal>
        );
    };

    openModal() {
        this.setState({modalIsOpen: true});
    };

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    updateCharacter(character) {
        this.props.editCharacter(character);
        this.setState({modalIsOpen: false});
    }

    renderField(field) {
        let props = field.props;
        return (
            <FormGroup controlId={field.id}>
                <ControlLabel>{field.label}</ControlLabel>
                <FormControl type={props.type}  placeholder={props.placeholder} {...field.input} />
            </FormGroup>
        );
    }

    inputProps(id, label, props) {
        return {
            id : id,
            label : label,
            props : props
        }
    }
}


function mapStateToProps({ characters }) {
    return { characters }
}

export default reduxForm({

    form: "editCharacterForm"
})(connect(mapStateToProps, { fetchCharacters, editCharacter })(ItemList));

