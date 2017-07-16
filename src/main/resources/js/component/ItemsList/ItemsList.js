/**
 * Created by cor on 7/16/17.
 */

import React, { Component } from 'react';
import { Media, Button } from 'react-bootstrap';
import styles from './itemsList.css';


export default class ItemsList extends Component {

    render() {
        debugger;
        let characters = this.props.characters.sort((nextCharacter, character) => character.created - nextCharacter.created);
        if(!characters || characters.length ===0) {
            return(
                <div></div>
            );
        }
        return (
            characters.map(character => {
                return (
                    <div>
                    <Media key={1} className={styles.itemStyle}>
                    <Media.Left>
                        <img width={128} height={128} src={"dd"}/>
                    </Media.Left>
                    {/*<Media.Body>*/}
                        {/*<Media.Heading className={styles.heading}>*/}
                            {/*<a onClick={() => this.props.initForm(character)}>{character.name} </a>*/}
                            {/*<Button bsStyle='danger' className='pull-right'*/}
                                    {/*onClick={() => this.props.deleteCharacter(character)}>Delete</Button>*/}
                        {/*</Media.Heading>*/}
                        {/*<p>{character.profession}</p>*/}
                        {/*<p>{character.description}</p>*/}
                        {/*<p>{character.email}</p>*/}
                    {/*</Media.Body>*/}
                </Media>
                    </div>
                );
            })
        );
    }
}
