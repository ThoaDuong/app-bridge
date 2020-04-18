import React, { Component } from 'react';
import * as messages from './../constants/Message';

class TableCartItem extends Component {
    render() {
        if(this.props.message){
            return(
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <h5 className="mt-4">{ this.props.message } </h5>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            )
        }
        var { cart} = this.props;
        return (
            <tr>
                <td>
                    <button onClick={ () => this.onHandleDelete(cart) } className="btn btn-table">x</button>
                </td>
                <td className="text-left">
                    <img src={`images/${ cart.product.image }`} alt="Product" />
                    <span className="ml-3">{ cart.product.name } </span>
                </td>
                <td>
                    <div className="mt-4">${ cart.product.price } </div>
                </td>
                <td>
                    <button onClick={ () => this.onHandleDecrease(cart) } className="btn btn-table">-</button>
                    <span>{ cart.quantity } </span>
                    <button onClick={ () => this.onHandleIncrease(cart) } className="btn btn-table">+</button>
                </td>
                <td>
                    <div className="mt-4">${ this.calcTotal(cart.product.price, cart.quantity) } </div>
                </td>
            </tr>
        );
    }
    calcTotal = (price, quantity) => {
        return price * quantity;
    }
    onHandleDelete = (cart) => {
        this.props.onDelete(cart, messages.MS_DELETE_SUCCESS);
    }
    onHandleIncrease = (cart) => {
        this.props.onIncrease(cart, messages.MS_UPDATE_SUCCESS);
    }
    onHandleDecrease = (cart) => {
        this.props.onDecrease(cart, messages.MS_UPDATE_SUCCESS);
    }
}

export default TableCartItem;