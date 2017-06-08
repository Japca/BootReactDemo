/**
 * Created by cor on 5/28/17.
 */

import React from "react";
import axios from "axios";
import {Media} from "react-bootstrap";
export default class List extends React.Component {


    render() {
        return(
            <div>
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Media Heading</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Media Heading</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <Media>
                            <Media.Left>
                                <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Nested Media Heading</Media.Heading>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            </Media.Body>
                        </Media>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Body>
                        <Media.Heading>Media Heading</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Media.Body>
                    <Media.Right>
                        <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
                    </Media.Right>
                </Media>
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Media Heading</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Media.Body>
                    <Media.Right>
                        <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
                    </Media.Right>
                </Media>
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