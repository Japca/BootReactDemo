/**
 * Created by cor on 5/28/17.
 *
 */

import React, {Component}from "react";
import {Media, Button, ButtonToolbar, FormGroup, ControlLabel, FormControl, Modal} from "react-bootstrap";
import styles from "./itemList.css";
import {connect} from "react-redux";
import { fetchCharacters, editCharacter } from "../../action/index";
import {Field, reduxForm} from "redux-form";

class ItemList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            showModal: false
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
                return <Media key={character.id} className={styles.itemStyle} onClick={() => this.openModal(character)}>
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
            <Modal show={this.state.showModal} onHide={() => this.closeModal()}>
                <form onSubmit={handleSubmit(this.updateCharacter.bind(this))}>
                    <Modal.Header closeButton>
                        <h3 className={styles.modalHeader} id="heading">Edit item</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <Field name="name"
                               component={this.renderField}
                               props={this.inputProps("formControlsName", "Name", {
                                   type: "text",
                                   placeholder: "Enter Name"
                               })}
                        />
                        <Field name="profession"
                               component={this.renderField}
                               props={this.inputProps("formControlsProfession", "profession", {
                                   type: "text",
                                   placeholder: "Enter Profession"
                               })}
                        />
                        <Field name="description"
                               component={this.renderField}
                               props={this.inputProps("formControlsDescription", "Description", {
                                   type: "text",
                                   placeholder: "Enter Description"
                               })}
                        />
                        <Field name="email"
                               component={this.renderField}
                               props={this.inputProps("formControlsEmail", "Email", {
                                   type: "text",
                                   placeholder: "Enter Email"
                               })}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonToolbar>
                            <Button bsStyle="default" className="btn pull-right" type="submit"
                                    onClick={() => this.closeModal()}>Close</Button>
                            <Button type="submit" bsStyle="primary" className="btn pull-right">Submit</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    };

    openModal(character) {
           this.setState({
            showModal: true,
            characterId: character.id,
            characterImage: character.image
        });
    };

    closeModal() {
        this.setState({showModal: false});
    }

    updateCharacter(character) {
        character.id = this.state.characterId;
        character.image = this.state.characterImage;
        this.props.editCharacter(character);
        this.setState({showModal: false});
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

