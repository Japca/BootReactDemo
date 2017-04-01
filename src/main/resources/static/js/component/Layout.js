import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Ahojssssssssss22",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Container/>
        <Footer />
      </div>
    );
  }
}