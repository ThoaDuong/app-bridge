import React, { Component } from 'react';

class Information extends Component {
    render() {
        return (
            <section>
                <div className="information">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <img src="images/h1-img-03.jpg" alt="Contact"/>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <h2>Get in Touch</h2>
                                <p>
                                    Mei invenire periculis ei, offendit mediocrem ne sea, eos suas elitr everti ea. Per vidit rebum quodsi id. Pericula interpre.
                                </p>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control input" placeholder="Your full name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control input" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control textarea" placeholder="Write something" rows="5"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn-send">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Information;