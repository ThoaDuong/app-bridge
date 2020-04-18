import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return (
            <section>
                <div className="subscribe">
                    <div className="subscribe__content">
                        <h1>Subscribe to Newsletter</h1>
                        <form className="mt-4">
                            <div className="input-group">
                                <input type="text" placeholder="E-mail Address"/>
                                <div className="input-group-append">
                                    <button className="btn btn-light btn-subscribe" type="submit">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Subscribe;