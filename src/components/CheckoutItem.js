import React, { Component } from 'react';

class CheckoutItem extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <td className="text-left">
                    <img src={`images/${ cart.product.image }`} alt={ cart.product.name } />
                    <span className="ml-3">{ cart.product.name } </span>
                </td>
                <td>
                    <div className="mt-4">${ cart.product.price }</div>
                </td>
                <td>
                    <div className="mt-4">{ cart.quantity }</div>
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
}

export default CheckoutItem;