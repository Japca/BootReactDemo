/**
 * Created by cor on 7/16/17.
 */

import React, {Component} from 'react';
import styles from './itemsList.css';
import {connect} from 'react-redux';
import {fetchCharacters, deleteCharacter} from '../../action/index';


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
        return this.props.characters.map(character => {
            return <div key={character.id} className={styles.item}>
                <div>
                    <img width={128} height={128} src={character.image}/>
                </div>

                <div className={styles.buttonLayout}>
                    <a className={styles.itemButton} onClick={() => this.props.initForm(character)} >
                        <i className='fa fa-pencil fa-lg'/>
                    </a>
                    <a className={styles.itemButton} onClick={() => this.props.deleteCharacter(character)}>
                        <i className='fa fa-times fa-lg'/>
                    </a>
                </div>

                <div className={styles.content}>
                    <h3> {character.name}</h3>
                    <h4>{character.profession}</h4>
                    <p>{character.description}</p>
                    <p>{character.email}</p>
                </div>

            </div>;
        });
    };
}

function mapStateToProps({characters}) {
    return {characters};
}

export default connect(mapStateToProps, {fetchCharacters, deleteCharacter})(ItemsList);


// renderCharacters = () => {
//     return this.props.characters.map(character => {
//         return <Media key={character.id} className={styles.itemStyle}>
//             <Media.Left>
//                 <img width={128} height={128} src={character.image}/>
//             </Media.Left>
//             <Media.Body>
//                 <Media.Heading className={styles.heading}>
//                     <a onClick={() => this.props.initForm(character)}>{character.name} </a>
//                     <Button bsStyle='danger' className='pull-right'
//                             onClick={() => this.props.deleteCharacter(character)}>Delete</Button>
//                 </Media.Heading>
//                 <p>{character.profession}</p>
//                 <p>{character.description}</p>
//                 <p>{character.email}</p>
//             </Media.Body>
//         </Media>;
//     });
// };
