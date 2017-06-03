import React from "react";
import ReactDOM from "react-dom";
import Layout from "./component/Layout";

// var http = require('http');
// var httpProxy = require('http-proxy');
// import Table from "./component/Table";
// // import Card from "./component/Card";
// // import {BrowserRouter as Router, Link, Route, } from "react-router-dom";
// httpProxy.createServer({
//     target:'http://localhost:8080'
// }).listen(8003);


const app = document.getElementById('app');
ReactDOM.render(<Layout />,   app);

// function getData() {
//     return axios.get('http://localhost:8080/items')
//         .then(function (response) {
//             console.log("Response!")
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log("Error!")
//             console.log(error);
//         })
//         .then(function (response) {
//             console.log("Finally")
//             console.log(response);
//         });
// }
//
// getData();


