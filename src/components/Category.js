import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <section>
                <div className="category">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="category__block text-center">
                                    <div className="category__img">
                                        <img src="images/custom-icon-1.png" alt="custom icon"/>
                                    </div>
                                    <div className="category__content">
                                        <h5 className="mt-4">Pottery classes</h5>
                                        <p className="mt-4">Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
                                            vocent impetus usu. Eos hinc senserit et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="category__block text-center">
                                    <div className="category__img">
                                        <img src="images/custom-icon-2.png" alt="custom icon"/>
                                    </div>
                                    <div className="category__content">
                                        <h5 className="mt-4">Design Proces</h5>
                                        <p className="mt-4">Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
                                            vocent impetus usu. Eos hinc senserit et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="category__block text-center">
                                    <div className="category__img">
                                        <img src="images/custom-icon-3.png" alt="custom icon"/>
                                    </div>
                                    <div className="category__content">
                                        <h5 className="mt-4">Gift Cards</h5>
                                        <p className="mt-4">Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
                                            vocent impetus usu. Eos hinc senserit et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="category__block text-center">
                                    <div className="category__img">
                                        <img src="images/custom-icon-4.png" alt="custom icon"/>
                                    </div>
                                    <div className="category__content">
                                        <h5 className="mt-4">Pottery Weel</h5>
                                        <p className="mt-4">Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
                                            vocent impetus usu. Eos hinc senserit et.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Category;