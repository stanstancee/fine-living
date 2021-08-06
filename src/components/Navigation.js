import React, { useState } from 'react';
import { List, XLg, Cart3 } from 'react-bootstrap-icons';
import { CSSTransition } from 'react-transition-group'
import { useWindowDimensions } from '../utils/Helpers'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

export const Nav = () => {
    return (
        <nav className="nav-links">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Jewelery</a>
                </li>
                <li>
                    <a href="/">Men's Clothing</a>
                </li>
                <li>
                    <a href="/">Women's Clothing</a>
                </li>
            </ul>
        </nav>
    )
}

const Navigation = () => {
    const [show, setShow] = useState({ showIcon: false, showNav: false })
    const counter = useSelector((state)=> state.cart)

    const handleShow = () => {
        setShow((prev) => {
            return {
                showIcon: !prev.showIcon,
                showNav: !prev.showNav

            }
        })
    }

    return (
        <header>
        <div className="navigation">
            <div className="nav-heading">
                <div className="icons" onClick={handleShow}>
                    {show.showIcon ? <XLg size={24} color="#F2F2F2" /> : <List size={30} color="#F2F2F2" />
                    }

                </div>
                <h2 className="heading">Fine Living</h2>
            </div>
            {useWindowDimensions().width >= 900 ?

                <Nav />
                :
                <CSSTransition
                    in={show.showNav} timeout={1000}
                    classNames="nav"
                    className="nav-links"
                    unmountOnExit
                >
                    <Nav />
                </CSSTransition>

            }
            <div className="nav-cart">
                <Link to="cart">
                <Cart3 size={30} color="#F2F2F2" /><span>{counter.length > 0? counter.length: ''}</span>
                </Link>
            </div>
        </div>
        </header>
    );

}

export default Navigation;