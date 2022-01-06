import React, {Component} from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <Nav>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/question">Question</Link>
                <Link className="nav-link" to="/about">About</Link>
            </Nav>
        )}
}