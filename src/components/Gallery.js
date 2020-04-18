import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <section>
                <div className="gallery">
                    <div className="gallery__content text-center">
                        <h1>Our Gallery</h1>
                        <p className="w-50 mx-auto mt-5">Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne vocent
                            impetus usu. Eos hinc senserit et, eu eam nullam recusabo voluptatum.</p>
                    </div>
                    <div className="gallery__img m-4">
                        <div className="container">
                            <div className="block">
                                <div className="block__item block__item1">
                                    <figure>
                                        <img src="images/home-gallery-1.jpg" alt="gallery"/>>
                                    </figure>
                                </div>
                                <div className="block__item block__item2">
                                    <figure>
                                        <img src="images/home-gallery-2.jpg" alt="gallery"/>
                                    </figure>
                                </div>
                                <div className="block__item block__item3">
                                    <figure>
                                        <img src="images/home-gallery-3.jpg" alt="gallery"/>
                                    </figure>
                                </div>
                                <div className="block__item block__item4">
                                    <figure>
                                        <img src="images/home-gallery-4.jpg" alt="gallery"/>
                                    </figure>
                                </div>
                                <div className="block__item block__item5">
                                    <figure>
                                        <img src="images/home-gallery-5.jpg" alt="gallery"/>
                                    </figure>
                                </div>
                                <div className="block__item block__item6">
                                    <figure>
                                        <img src="images/home-gallery-6.jpg" alt="gallery"/>
                                    </figure>
                                </div>
                                <div className="block__item block__item7">
                                    <figure>
                                        <img src="images/home-gallery-7.jpg" alt="gallery"/>
                                    </figure>
                                </div>
                                <div className="block__item block__item8">
                                    <figure>
                                        <img src="images/home-gallery-8.jpg" alt="gallery"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;