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
        if(! characters) {
            return;
        }
        debugger;
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
                <form onSubmit={handleSubmit(this.updateItem.bind(this))}>
                    <h3 className={styles.modalHeader} id="heading">Edit item</h3>
                    <hr/>

                    <Field name="header"
                           component={this.renderField}
                           props={{
                               id: "formControlsName",
                               label: "name",
                               props: {
                                   type: "text",
                                   placeholder: "Enter name"
                               }
                           }
                           }
                    />

                    {/*<FieldGroup*/}
                    {/*id="formControlsName"*/}
                    {/*type="text"*/}
                    {/*label="Name"*/}
                    {/*placeholder="Enter name"*/}
                    {/*/>*/}
                    {/*<FieldGroup*/}
                    {/*id="formControlsTitle"*/}
                    {/*type="text"*/}
                    {/*label="Title"*/}
                    {/*placeholder="Enter title"*/}
                    {/*/>*/}
                    {/*<FieldGroup*/}
                    {/*id="formControlsDescription"*/}
                    {/*type="text"*/}
                    {/*label="Description"*/}
                    {/*placeholder="Enter description"*/}
                    {/*/>*/}
                    {/*<FieldGroup*/}
                    {/*id="formControlsEmail"*/}
                    {/*type="email"*/}
                    {/*label="Email"*/}
                    {/*placeholder="Enter email"*/}
                    {/*/>*/}
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

    updateItem(item) {
        debugger;
        this.props.editItem(item);
        this.setState({modalIsOpen: false});
    }


    renderField(field) {
        return (
        <input className="form-control" type="text" {...field.input} />
            // <FormGroup controlId={field.id}>
            //     <ControlLabel>{field.label}</ControlLabel>
            //     <FormControl {...field.props} />
            //     {/*{help && <HelpBlock>{help}</HelpBlock>}*/}
            // </FormGroup>
        );
    }

}


// function FieldGroup({id, label, help, ...props}) {
//     debugger;
//     return (
//         <div>
//             <FormGroup controlId={id}>
//                 <ControlLabel>{label}</ControlLabel>
//                 <FormControl {...props} />
//                 {help && <HelpBlock>{help}</HelpBlock>}
//             </FormGroup>
//         </div>
//     );
// }
// /rops = Object {type: "text", placeholder:

function mapStateToProps({characters}) {
    debugger;
    return {characters};
}

export default reduxForm({

    form: "editCharacterForm"
})(connect(mapStateToProps, { fetchCharacters, editCharacter })(ItemList));


// {fetchItems, editItem
// export default connect(mapStateToProps, {fetchItems, editItem})(ItemList)