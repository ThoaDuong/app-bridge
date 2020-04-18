import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TableCart from '../components/TableCart';
import TableCartItem from '../components/TableCartItem';
import * as actions from './../actions/index';
import { connect } from 'react-redux';
import callApi from './../utils/callApi';
import * as messages from './../constants/Message';

class Cart extends Component {
    componentDidMount(){
        callApi('https://5e68a3fcd426c00016b7e245.mockapi.io/api/products', 'GET', null).then(res => {
            var id = this.props.match.params.id;
            //Get all products in cart
            if(id === "0"){
                this.props.onGetAllCart();
            }
            //Add product to cart
            else{
                var products = res.data;
                var indexProduct = -1
                if(products.length > 0){
                    indexProduct = this.findIndex(products, id);
                    if(indexProduct !== -1){
                        var cart = {
                            product : products[indexProduct],
                            quantity : 1
                        }
                        this.props.onAddToCart(cart, messages.MS_ADD_SUCCESS);
                    }
                }
            }
        })
    }
    render() {
        var { carts, message, onCheckEmptyCart } = this.props;
        return (
            <div>
                <Header/>
                <Title/>
                <TableCart 
                total = { this.showResult(carts) } 
                message = { message } 
                checkNotEmptyCart = { this.checkNotEmptyCart(carts) }
                onCheckEmptyCart = { onCheckEmptyCart }
                >
                    { this.showCarts(carts) }
                </TableCart>
                <Footer/>
            </div>
        );
    }
    checkNotEmptyCart = (carts) => {
        var result = false;
        if(carts.length > 0){
            result = true;
        }
        return result;
    }
    showCarts = (carts) => {
        var result = null;
        if(carts.length > 0){
            result = carts.map((cart, index) => {
                return <TableCartItem 
                    key = {index} 
                    cart = {cart} 
                    onDelete = { this.props.onDeleteItemInCart }
                    onIncrease = { this.props.onIncreaseQuantityCart }
                    onDecrease = { this.props.onDecreaseQuantityCart }
                />
            })
        }else{
            result = <TableCartItem message = { messages.MS_EMPTY_CART } />
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
    findIndex = (products, id) => {
        var result = -1;
        if(products.length > 0 && id){
            for(var i=0; i<products.length; i++){
                if(products[i].id === id){
                    result = i;
                    break
                }
            }
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return{
        products : state.products,
        carts : state.carts,
        message : state.message
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onFetchAllProduct : () => {
            dispatch(actions.actFetchAllProductRequest())
        },
        onAddToCart : (cart, message) => {
            dispatch(actions.actAddToCart(cart, message))
        },
        onGetAllCart : () => {
            dispatch(actions.actGetAllCart())
        },
        onDeleteItemInCart : (cart, message) => {
            dispatch(actions.actDeleteItemInCart(cart, message))
        },
        onIncreaseQuantityCart : (cart, message) => {
            dispatch(actions.actIncreaseQuantityCart(cart, message))
        },
        onDecreaseQuantityCart : (cart, message) => {
            dispatch(actions.actDecreaseQuantityCart(cart, message))
        },
        onCheckEmptyCart : (message) => {
            dispatch(actions.actCheckEmptyCart(message))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Cart);