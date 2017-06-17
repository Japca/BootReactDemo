/**
 * Created by jakub Krhovjak on 6/17/17.
 *
 */
import axios from "axios";

function loadItems() {
    return axios.get('http://localhost:8080/items')
        .then(response => {
            debugger;
            this.setState({ items:response.data });
        })
        .catch(error => {
            console.log("Error!");
            console.log(error);
        })
        .then(response => {
            console.log("Finally");
            console.log(response);
        });

}

const Rest = {loadItems};
export default Rest;

