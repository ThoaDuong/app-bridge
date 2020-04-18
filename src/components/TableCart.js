import React, { Component } from 'react';
import TableCartResult from './TableCartResult';
import { Link } from 'react-router-dom';
import * as messages from './../constants/Message';

class TableCart extends Component {
    render() {
        var { message, checkNotEmptyCart } = this.props;
        return (
            <section>
                <div className="table-cart">
                    <div className="container">
                        <h5 className="mb-3 text-info">{ message } </h5>
                        <div className="table-responsive">
                            <table className="table table-hover text-center">
                                <thead className="thead-light">
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.props.children }
                                </tbody>
                            </table>
                        </div>
                        <TableCartResult total = { this.props.total }/>
                        <div className="text-right mr-2">
                            <Link to = { checkNotEmptyCart ? 'checkout' : 'cart-0' } onClick={ this.onHandleCheckout } className="btn btn-checkout">Proceed to checkout</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    onHandleCheckout = () => {
        this.props.onCheckEmptyCart(messages.MS_CHECK_EMPTY_TO_CHECKOUT);
    }
}

export default TableCart;