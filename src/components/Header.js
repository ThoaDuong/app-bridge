import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderCartItem from './HeaderCartItem';
import * as messages from './../constants/Message';

const menus = [
    {
        to : "/",
        exact : true,
        label : "Home"
    },
    {
        to : "/about",
        exact : false,
        label : "About"
    },
    {
        to : "/shop",
        exact : false,
        label : "Shop"
    },
    {
        to : "/contact",
        exact : false,
        label : "Contact"
    }
];
const CustomLink = ( {label, to, activeOnlyWhenExact} ) => {
    return <Route path = { to } exact = { activeOnlyWhenExact } children = {({match}) => {
        var active = match ? "--active" : "";
        return (
            <li className="nav-item">
                <Link className = {`nav-link ${active}`} to = { to }>
                    { label }
                </Link>
            </li>
        )
    }}
    />
}
class Header extends Component {
    showMenu = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((item, index) => {
                return (
                    <CustomLink 
                        key = { index }
                        label = { item.label }
                        to = { item.to }
                        activeOnlyWhenExact = { item.exact }
                    />
                )
            })
        }
        return result;
    }
    calcQuantity = (carts) => {
        var result = 0;
        if(carts.length > 0){
            for(var i=0; i<carts.length; i++){
                result += carts[i].quantity;
            }
        }
        return result;
    }
    showCartItem = carts => {
        var result = null;
        if(carts.length > 0){
            result = carts.map((cart, index) => {
                return <HeaderCartItem 
                    key = { index }
                    cart = { cart }
                />
            })
        }else{
            result = <HeaderCartItem message = { messages.MS_EMPTY_CART } />
        }
        return result;
    }
    showResult = (carts) => {
        var result = 0;
        if(carts.length > 0){
            for(var i=0; i<carts.length; i++){
                result += carts[i].product.price * carts[i].quantity; 
            }
        }
        return result;
    }
    render() {
        var { carts } = this.props;
        return (
            <header>
                <menu>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <Link className="navbar-brand ml-4" exact="true" to="/">
                            <img src="images/logo.png" alt="Brand"/>
                        </Link>
                        <button className="navbar-toggler" data-target="#/bridge-nav" data-toggle="collapse"
                            aria-controls="bridge-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="bridge-nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                { this.showMenu(menus) }
                                <li className="nav-item">
                                    <a className="nav-link" href="#/"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#/"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#/"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link cart-icon" to="cart-0">
                                        <i className="fas fa-shopping-cart"> <span className="badge badge-dark">{ this.calcQuantity(carts) }</span> </i>
                                    </Link>
                                    <div className="cart-block">
                                        <div className="card">
                                            <div className="card-body">
                                                { this.showCartItem(carts) }
                                            </div> 
                                            <div className="card-footer">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <Link className="cart-footer-a" to="cart-0">Cart <i className="fas fa-shopping-cart"></i></Link>
                                                    </div>
                                                    <div className="col-6">Total: ${ this.showResult(carts) } </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </menu>
            </header>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        carts : state.carts
    }
}
export default connect(mapStateToProps, null) (Header);