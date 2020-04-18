import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <section>
                <div className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <h1>What we do</h1>
                                <p>Mei invenire periculis ei, offendit mediocrem ne sea, eos suas elitr everti ea. 
                                    Per vidit rebum quodsi id. Pericula interpretaris ea pri, prima conguen terpretaris prim. 
                                    Ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                                </p>
                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor  accumsan ipsum velit</p>
                                <img className="img-sign" src="images/about-single-image-2.png" alt="sign about"/>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <img className="img-blog" src="images/about-single-image-1.jpg" alt="blog"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;