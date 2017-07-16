/**
 * Created by cor on 7/16/17.
 */

import React from 'react';
import { Media, Button } from 'react-bootstrap';
import styles from './itemsList.css';

const ItemsList = props => {
    let characters = props.characters.sort((nextCharacter, character) => character.created - nextCharacter.created);
    return (
        <div>
            {  characters.map(character => {
            return <Media key={character.id} className={styles.itemStyle}>
                <Media.Left>
                    <img width={128} height={128} src={character.image}/>
                </Media.Left>
                <Media.Body>
                    <Media.Heading className={styles.heading}>
                        <a onClick={() => props.initForm(character)}>{character.name} </a>
                        <Button bsStyle='danger' className='pull-right'
                                onClick={() => props.deleteCharacter(character)}>Delete</Button>
                    </Media.Heading>
                    <p>{character.profession}</p>
                    <p>{character.description}</p>
                    <p>{character.email}</p>
                </Media.Body>
            </Media>;
        })}
        </div>
    );
};

export default ItemsList;