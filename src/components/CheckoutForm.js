import React, { Component } from 'react';
import TableCartResult from './TableCartResult';
import * as messages from './../constants/Message';
import { Link } from 'react-router-dom';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            number : '',
            country : '',
            city : '',
            street : '',
            note : '',
            message : ''
        }
    }
    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : [value]
        })
    }
    render() {
        var { name, email, number, country, city, street, note, message } = this.state;
        return (
            <section>
                <div className="checkout-form">
                    <div className="container">
                    <h6 className="text-danger"> { message } </h6>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <form>
                                    <label><h5>Billing details</h5></label>
                                    <div className="form-group">
                                        <input type="text" className="form-control input" placeholder="Your full name"
                                            name = "name"
                                            value = { name }
                                            onChange = { this.onHandleChange } />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control input" placeholder="Your Email"
                                            name = "email"
                                            value = { email }
                                            onChange = { this.onHandleChange }/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control input" placeholder="Your Phone Number"
                                            name = "number"
                                            value = { number }
                                            onChange = { this.onHandleChange }/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control input" placeholder="Country"
                                            name = "country"
                                            value = { country }
                                            onChange = { this.onHandleChange }/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control input" placeholder="Town / City"
                                            name = "city"
                                            value = { city }
                                            onChange = { this.onHandleChange }/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control input" placeholder="House number and street name"
                                            name = "street"
                                            value = { street }
                                            onChange = { this.onHandleChange }/>
                                    </div>
                                    <div className="form-group">
                                        <label><h5>Additional information</h5></label>
                                        <textarea className="form-control textarea" placeholder="Notes about your order, e.g, special notes for delivery" rows="5"
                                            name = "note"
                                            value = { note }
                                            onChange = { this.onHandleChange }></textarea>
                                    </div>
                                    <div className="form-group">
                                        <Link to = { this.checkNotEmptyForm() ? 'cart-0' : 'checkout' } onClick= { this.onHandleClick } type="button" className="form-control btn-send">Continue to payment</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <h5>Review cart</h5>
                                <div className="table-responsive">
                                    <table className="table table-hover text-center">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.props.children }
                                        </tbody>
                                    </table>
                                </div>
                                <TableCartResult total = { this.props.total } />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    checkNotEmptyForm = () => {
        var { name, email, number, country, city, street } = this.state;
        var result = false;
        if( (name && number && email && country && city && street) !== ''){
            result = true;
        }
        return result;
    }
    onHandleClick = () => {
        var notEmpty =  this.checkNotEmptyForm();
        if(notEmpty){
            this.props.onCheck(messages.MS_PAYMENT_SUCCESS);
        }else{
            this.setState({
                message : "Please field complete information for us to confirm orders!"
            })
        }
        
    }
}

export default CheckoutForm;