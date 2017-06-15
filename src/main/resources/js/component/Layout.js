import React from "react";
import Navigator from "./Navigator";
import Content from "./Content/Content";
// import Table from "./Table";
// import Card from "./Card";
// import List from "./List";
import {BrowserRouter as Router} from "react-router-dom";



export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Ahojss3",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
        <div>

        <Router >

               <div>

                <Navigator/>
                <Content />

                </div>
        </Router>

        </div>
    );
  }
}




