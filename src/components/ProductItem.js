import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var { product } = this.props;
        return (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">                       
                <div className="product text-center">
                    <div className="product__img">
                        <img src={`images/${ product.image }`} alt= { product.name } />
                        <div className="add-to-cart">
                            <Link className="add-to-cart-a" to={ `cart-${ product.id }`}>Add to cart</Link>
                        </div>
                    </div>
                    <Link className="product-link" to={`product-${product.id}`}><h4 className="mt-4">{ product.name }</h4></Link>
                    <span>${ product.price }</span>
                </div>
            </div>
        );
    }
}

export default ProductItem;