/**
 * Created by cor on 7/16/17.
 */

import React, { Component } from 'react';
import styles from './itemsList.css';
import { connect }  from 'react-redux';
import {fetchCharacters, deleteCharacter} from '../../action/index';

import { values } from 'lodash';


class ItemsList extends Component {

    componentDidMount() {
        this.props.fetchCharacters();
    }

    render() {
        console.info('item list');
        return (
            <div>
                {this.renderCharacters()}
            </div>
        );
    }

    renderCharacters = () => {
 //       let a = this.props.characters;
        return values(this.props.characters).map(character => {
            return <div key={character.id} className={styles.item}>
                <div>
                    <img width={128} height={128} src={character.image}/>
                </div>

                <div className={styles.content}>
                    <h3> {character.name}</h3>
                    <h4>{character.profession}</h4>
                    <p>{character.description}</p>
                    <div className={styles.email}><p>{character.email}</p></div>
                </div>

                {this.addOverlay(character)}
            </div>;
        });
    };

    addOverlay = (character) => {
       return (
           <div className={styles.buttonLayout}>
               <a className={[styles.itemButton, "showTooltip"].join(' ')} title="Update Character"
                  onClick={() => this.props.initForm(character)}>
                   <i className='fa fa-pencil fa-lg'/>
               </a>
               <a className={[styles.itemButton, "showTooltip"].join(' ')} title="Delete Character"
                  onClick={() => this.props.deleteCharacter(character)}>
                   <i className='fa fa-times fa-lg'/>
               </a>
           </div>
       );
    }
}

function mapStateToProps({characters}) {
    return {characters};
}

export default connect(mapStateToProps, {fetchCharacters, deleteCharacter})(ItemsList);

