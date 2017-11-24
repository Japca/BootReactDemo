/* eslint-disable no-unexpected-multiline */
/**
 * Created by cor on 5/28/17.
 *
 */

import React, { Component }from 'react';
import {Button, ButtonToolbar, FormGroup, ControlLabel,
    FormControl, Modal } from 'react-bootstrap';
import styles from './itemsLayout.css';
import {connect} from 'react-redux';
import { editCharacter, sortBy} from '../../action/index';
import {Field, reduxForm} from 'redux-form';

import ItemsHandler from '../../container/ItemsHandler/ItemsHandler'
import ItemsList from "../ItemsList/ItemsList";

const required = value => (value ? undefined : 'Required')
const NAME = 'name'
const PROFESSION = 'profession'
const DESCRIPTION = 'description'
const EMAIL ='email'
const REQUIRED = 'Required'

const validate = values => {
    const errors ={}
    const { email, description, name , profession } = values
     if(!email)  {
        errors.email = REQUIRED
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if(!description) {
        errors.description = REQUIRED
    }

    if(!name) {
        errors.name = REQUIRED
    }

    if(!profession) {
        errors.profession = REQUIRED
    }

    return errors;
}

class ItemsLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState;
    }

    render() {
        console.log('render item Layout');
        return (
            <div className={styles.containter}>
                <ItemsHandler newItem={this.initForm} />
                <ItemsList  initForm={this.initForm} />
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
                           props={this.inputProps(NAME, 'Name', {
                               type: 'text',
                               placeholder: 'Enter Name'
                           })}
                    />
                    <Field name='profession'
                           component={this.renderField}
                           props={this.inputProps(PROFESSION, 'Profession', {
                               type: 'text',
                               placeholder: 'Enter Profession'
                           })}
                    />
                    <Field name='description'
                           component={this.renderField}
                           props={this.inputProps(DESCRIPTION, 'Description', {
                               type: 'text',
                               placeholder: 'Enter Description'
                           })}
                    />
                    <Field name='email'
                           component={this.renderField}
                           props={this.inputProps(EMAIL, 'Email', {
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

    renderField(field) {
        const {meta : { valid, error }, props : { type, placeholder }, id, label, input } = field
        return (
            <FormGroup controlId={id} validationState={valid === false ? 'error' : null}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type={type}  placeholder={placeholder} {...input} />
                <span className={styles.error}>{ error && <i class="fa fa-exclamation" aria-hidden="true"></i>} {error}</span>
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

    validateForm(field) {
        return ''
    }
}


function mapStateToProps({ characters }) {
    return { characters };
}

export default reduxForm({
    form: 'editCharacterForm',
    validate
})
(connect(mapStateToProps, { editCharacter })(ItemsLayout));

