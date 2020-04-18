import React, { Component } from 'react';

class ShopProduct extends Component {
    render() {
        return (
            <section>
                <div className="shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-12">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#/"><h4>Categories</h4></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#/">Clay</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#/">Design</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#/">New</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#/">Plaster</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#/">Uncategorized</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#/">Vision</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-12">
                                <div className="row">
                                    { this.props.children }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopProduct;