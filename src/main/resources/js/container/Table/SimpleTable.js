/**
 * Created by cor on 4/5/17.
 *
 */
import React, {Component, PureComponent} from "react";
import {Table, thead, tr, th} from 'react-bootstrap';
import {connect} from "react-redux";
import {fetchCharacters} from "../../action/index";
import styles from './SimpleTable.css';
import { values } from 'lodash';


class SimpleTable extends Component {

    componentDidMount() {
        this.props.fetchCharacters();
    }

    render() {
      console.log('render table');
        return (
            <div>
                {this.renderTable()}
            </div>
        );
    }

    renderTable = () => {
        let characters = values(this.props.characters);
        return (
            <Table striped bordered condensed hover className={styles.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>About</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {characters.map(character => {
                    return <tr key={character.id}>
                        <td>{character.name}</td>
                        <td>{character.profession}</td>
                        <td>{character.description}</td>
                        <td>{character.email}</td>
                    </tr>
                })}
                </tbody>
            </Table>
        );
    };
}

function mapStateToProps({ characters }) {
    return { characters };
}

export default connect(mapStateToProps, { fetchCharacters } )(SimpleTable);




