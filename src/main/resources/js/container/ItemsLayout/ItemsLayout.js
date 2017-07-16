/* eslint-disable no-unexpected-multiline */
/**
 * Created by cor on 5/28/17.
 *
 */

import React, {Component}from 'react';
import {Button, ButtonToolbar, FormGroup, ControlLabel,
    FormControl, Modal } from 'react-bootstrap';
import styles from './itemsLayout.css';
import {connect} from 'react-redux';
import { fetchCharacters, editCharacter, deleteCharacter, sortBy} from '../../action/index';
import {Field, reduxForm} from 'redux-form';

import ItemsHandler from '../../component/ItemsHandler/ItemsHandler'
import ItemsList from "../ItemsList/ItemsList";

class ItemsLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    render() {
        console.log('render item list');
        return (
            <div className={styles.listClass}>
                <ItemsHandler newItem={this.initForm}
                              sort={this.sort}
                />
                <ItemsList  initForm={this.initForm}
                           deleteCharacter={this.deleteCharacter}
                />
                { this.renderModal() }
            </div>
        );
    }

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

    initForm = character => {
        this.props.initialize(character);
        this.openModal();
    };

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

    deleteCharacter = character => {
        this.props.deleteCharacter(character);
    };

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

    sort = sort =>  {
        this.props.sortBy(sort);
    };
}


function mapStateToProps({ characters }) {
    return { characters };
}

export default reduxForm({
    form: 'editCharacterForm'
})
(connect(mapStateToProps, { sortBy, editCharacter, deleteCharacter })(ItemsLayout));

