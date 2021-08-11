import React, { useState } from 'react';
import { List, XLg, Cart3 } from 'react-bootstrap-icons';
import { CSSTransition } from 'react-transition-group'
import { useWindowDimensions } from '../utils/Helpers'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

export const Nav = ({handleShow}) => {
    const categories= useSelector((state) => state.categories)
    return (
        <nav className="nav-links">

            <ul>
                <li onClick={handleShow} >
                    <Link to="/">Home</Link>
                </li>
            {categories.map((category,index) => <li onClick={handleShow} key={index} ><Link to={`/categories/${category}`}>{category}</Link></li>)}
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
                <h2 className="heading"><Link to="/">Fine Living</Link></h2>
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
                    <Nav  handleShow = { handleShow } />
                </CSSTransition>

            }
            <div className="nav-cart">
                <Link to="/cart">
                <Cart3 size={30} color="#F2F2F2" /><span className="cart-counter">{counter.length > 0? counter.length: ''}</span>
                </Link>
            </div>
        </div>
        </header>
    );

}

export default Navigation;
