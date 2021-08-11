import React, { Component } from 'react';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import { Nav } from './Navigation'
import { Link } from 'react-router-dom'

export default class componentName extends Component {
    render() {
        return (
            <footer>

                <div className="footer">
                    <div className="footer-thick-line">
                        <div></div>

                    </div>

                    <h2 className="heading footer-heading"><Link to="/">Fine Living</Link></h2>

                    <Nav />
                    <p className="footer-paragraph">
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </p>
                    <p className="footer-copyright">Copyright 2021. All Rights Reserved</p>




                    <div className="footer-social">
                        <ul>
                            <li><a href="/#"><Facebook /></a></li>
                            <li><a href="/#"><Twitter /></a></li>
                            <li><a href="/#"><Instagram /></a></li>
                        </ul>
                    </div>

                </div>
            </footer>
        );
    }
}
