import React, { Component } from 'react';

class LastestProduct extends Component {
    render() {
        return (
            <section>
                <div className="lastest-product">
                    <div className="lastest-product__content">
                        <h2>Latest products</h2>
                        <p>Mei invenire periculis ei, offendit mediocrem ne sea, eos suas elitr everti ea.</p>
                    </div>
                    <div className="container">
                        <div className="lastest-product__block mt-5">
                            <div className="row">
                                { this.props.children }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LastestProduct;