import React, { Component } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import CheckoutForm from '../components/CheckoutForm';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import CheckoutItem from '../components/CheckoutItem';

class Checkout extends Component {
    render() {
        var { carts } = this.props;
        return (
            <div>
                <Header/>
                <Title/>
                <CheckoutForm total = { this.showResult(carts) } onCheck = { this.props.onCheckoutPayment }>
                    { this.showCartItem(carts) }
                </CheckoutForm>
                <Footer/>
            </div>
        );
    }
    showCartItem = (carts) => {
        var result = null;
        if(carts.length > 0){
            result = carts.map((cart, index) => {
                return <CheckoutItem
                    key = { index }
                    cart = { cart }
                />
            })
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
}
const mapStateToProps = (state) => {
    return{
        carts : state.carts
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onCheckoutPayment : (message) => {
            dispatch(actions.actCheckoutPayment(message))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Checkout);