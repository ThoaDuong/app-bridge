import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class HeaderCartItem extends Component {
    render() {
        if(this.props.message){
            return <h6 className="text-center"> { this.props.message } </h6>
        }
        var { cart } = this.props;
        return (
            <Fragment>
                <Link className="cart-item" to = {`product-${ cart.product.id }`}>
                    <div className="row cart-row">
                        <div className="col-3">
                            <img src={`images/${ cart.product.image }`} alt={ cart.product.name } />
                        </div>
                        <div className="col-9">
                            <h6>{ cart.product.name }</h6>
                            <p>{ cart.quantity } x ${ cart.product.price }</p>
                        </div>
                    </div>
                </Link>
            </Fragment>
        );
    }
}

export default HeaderCartItem;