/**
 * Created by cor on 4/1/17.
 */

import React from "react";

//axios.get('http://localhost:8080/items'),


export default class Container extends React.Component {

    constructor() {
        super();
        this.state = {
          items: [],
            // title:  JSON.parse(axios.get('http://localhost:8081/items').toString()),
        };
    }

    componentDidMount() {
        // axios.get('http://localhost:8081/items');
        // axios.get('http://localhost:8081/items')
        //     .then(function (items) {
        //         console.log(items);
        //     }, function (error) {
        //         console.error('uh oh: ', error);   // 'uh oh: something bad happened’
        //     });
        // client({method: 'GET', path: '/api/employees'}).done(response => {
        //     this.setState({employees: response.entity._embedded.employees});
        // });
    }

    render() {
        return (
            <div>
          ITEMS!!!!!!!!!!!!!!!!
                <p>{this.state.items}</p>

            </div>
        );
    }
}
