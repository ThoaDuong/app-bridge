import React, { Component } from 'react';

class Related extends Component {
    render() {
        return (
            <section>
                <div className="related">
                    <div className="container">
                        <h2 className="mb-4">Related Products</h2>
                        <div className="related__block">
                            <div className="row">
                                {  this.props.children }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Related;