/* eslint-disable no-unexpected-multiline */
/**
 * Created by cor on 5/28/17.
 *
 */

import React, {Component}from 'react';
import {Media, Button, ButtonToolbar, FormGroup, ControlLabel,
    FormControl, Modal, Glyphicon } from 'react-bootstrap';
import styles from './itemList.css';
import {connect} from 'react-redux';
import { fetchCharacters, editCharacter, deleteCharacter } from '../../action/index';
import {Field, reduxForm} from 'redux-form';
import FontAwesome from 'react-fontawesome';


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
        console.log('render item list');
        return (
            <div className={styles.listClass}>
                { this.renderAddButton() }
                { this.renderCharactersList() }
                { this.renderModal() }
            </div>
        );
    }

    renderAddButton = () => {
        return (
            <div className={styles.centre}>
                <Button bsStyle="success" onClick={() => this.initForm({})}>
                    <span>
                     <i className='fa fa-plus fa-lg' />
                    </span>
                    </Button>
            </div>
        );
    };

    renderCharactersList = () => {
        let characters = this.props.characters.sort((nextCharacter, character) => character.created - nextCharacter.created);
        return (
            characters.map(character => {
                return <Media key={character.id} className={styles.itemStyle}>
                    <Media.Left>
                        <img width={128} height={128} src={character.image}/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading className={styles.heading}>
                            <a onClick={() => this.initForm(character)}>{character.name} </a>
                            <Button bsStyle='danger' className='pull-right'
                                    onClick={() => this.deleteCharacter(character)}>Delete</Button>
                        </Media.Heading>
                        <p>{character.profession}</p>
                        <p>{character.description}</p>
                        <p>{character.email}</p>
                    </Media.Body>
                </Media>;
            })
        );
    };

    renderModal = () => {
        return (
            <Modal show={this.state.showModal} onHide={() => this.closeModal()}>
                { this.characterForm() }
            </Modal>
        );
    };

    characterForm = () => {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.updateCharacter.bind(this))}>
                <Modal.Header closeButton>
                    <h3 className={styles.modalHeader} id='heading'>Edit item</h3>
                </Modal.Header>
                <Modal.Body>
                    <Field name='name'
                           component={this.renderField}
                           props={this.inputProps('formControlsName', 'Name', {
                               type: 'text',
                               placeholder: 'Enter Name'
                           })}
                    />
                    <Field name='profession'
                           component={this.renderField}
                           props={this.inputProps('formControlsProfession', 'profession', {
                               type: 'text',
                               placeholder: 'Enter Profession'
                           })}
                    />
                    <Field name='description'
                           component={this.renderField}
                           props={this.inputProps('formControlsDescription', 'Description', {
                               type: 'text',
                               placeholder: 'Enter Description'
                           })}
                    />
                    <Field name='email'
                           component={this.renderField}
                           props={this.inputProps('formControlsEmail', 'Email', {
                               type: 'text',
                               placeholder: 'Enter Email'
                           })}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle='default' className='btn pull-right'
                                onClick={() => this.closeModal()}>Close</Button>
                        <Button type='submit' bsStyle='primary' className='btn pull-right'>Submit</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </form>
        );
    };



    initForm(character) {
        this.props.initialize(character);
        this.openModal();
    }

    openModal() {
           this.setState({ showModal: true });
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    updateCharacter(character) {
        this.props.editCharacter(character);
        this.closeModal();
    }

    deleteCharacter(character) {
        this.props.deleteCharacter(character);
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
        };
    }
}


function mapStateToProps({ characters }) {
    return { characters };
}

export default reduxForm({
    form: 'editCharacterForm'
})
(connect(mapStateToProps, { fetchCharacters, editCharacter, deleteCharacter })(ItemList));

