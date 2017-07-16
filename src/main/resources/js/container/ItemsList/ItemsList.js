/**
 * Created by cor on 7/16/17.
 */

import React, { Component } from 'react';
import { Media, Button } from 'react-bootstrap';
import styles from './itemsList.css';
import {connect} from 'react-redux';
import { fetchCharacters, editCharacter, deleteCharacter, sortBy} from '../../action/index';


class ItemsList extends Component {

    componentDidMount() {
        this.props.fetchCharacters();
    }

    render() {
        console.info('item list');
        return (
            <div>
                { this.renderCharacters() }
            </div>
        );
    }

    renderCharacters = () => {
            return this.props.characters.map(character => {
                return <Media key={character.id} className={styles.itemStyle}>
                    <Media.Left>
                        <img width={128} height={128} src={character.image}/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading className={styles.heading}>
                            <a onClick={() => this.props.initForm(character)}>{character.name} </a>
                            <Button bsStyle='danger' className='pull-right'
                                    onClick={() => this.props.deleteCharacter(character)}>Delete</Button>
                        </Media.Heading>
                        <p>{character.profession}</p>
                        <p>{character.description}</p>
                        <p>{character.email}</p>
                    </Media.Body>
                </Media>;
            });
    };
}

function mapStateToProps({ characters }) {
    return { characters };
}

export default connect(mapStateToProps, { fetchCharacters, deleteCharacter })(ItemsList);

