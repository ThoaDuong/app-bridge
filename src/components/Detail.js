import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {
    render() {
        var { product } = this.props;
        return (
            <section>
                <div className="detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <img src={`images/${ product.image }`} alt={ product.name } />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <h2>{ product.name } </h2>
                                <p className="price">${ product.price }.00 </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                <div className="text-center mt-4">
                                    <Link className="add-to-cart" to={`cart-${product.id}`}>Add to cart</Link>
                                </div>
                                <div className="list">
                                    <h6><span>SKU:</span> 003</h6>
                                    <h6><span>CATEGORIES:</span> Clay, Design, New, Plaster, Vision</h6>
                                    <h6><span>TAGS:</span> Artist, Brick, Ceramics, Oval, Tactile, Wood</h6>
                                </div>
                                <button type="button" className="btn btn-more" data-toggle="collapse" data-target="#description">Description</button>
                                <div id="description" className="collapse">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <button type="button" className="btn btn-more" data-toggle="collapse" data-target="#additional">Additional Information</button>
                                <div id="additional" className="collapse">
                                    <h6><span>WEIGHT:</span> 3 kg</h6>
                                    <h6><span>DIMENSIONS:</span> 56 x 15 x 34 cm</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Detail;