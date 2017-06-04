/**
 * Created by cor on 5/28/17.
 */

import React from "react";
import axios from "axios";

export default class List extends React.Component {


    render() {
        return(
            <div>
                list
                {this.getData}
                {/*{this.getData()}*/}
            </div>

        );
    }

    getData = () => {

        return axios.get('http://localhost:8080/items')
            .then(function (response) {
                console.log("Response!");
                console.log(response);
            })
            .catch(function (error) {
                console.log("Error!");
                console.log(error);
            })
            .then(function (response) {
                console.log("Finally");
                console.log(response);
            });
    }

}



// const Client = { search };
// export default Client;