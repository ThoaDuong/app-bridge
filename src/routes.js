import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from './pages/Checkout';

const routes = [
    {
        path : "/",
        exact : true,
        component : () => <Home/>
    },
    {
        path : "/about",
        exact : false,
        component : () => <About/>
    },
    {
        path : "/contact",
        exact : false,
        component : () => <Contact/>
    },
    {
        path : "/shop",
        exact : false,
        component : () => <Shop/>
    },
    {
        path : "/product-:id",
        exact : false,
        component : ({match}) => <Product match = {match} />
    },
    {
        path : "/cart-:id",
        exact : false,
        component : ({match}) => <Cart match = {match} />
    },
    {
        path : "/checkout",
        exact : false,
        component : () => <Checkout/>
    }
]
export default routes;