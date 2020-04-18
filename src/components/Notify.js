import React, { Component } from 'react';

class Notify extends Component {
    render() {
        return (
            <div style={{position: 'relative', zIndex: 10}}>
                <div className="toast" role="alert" aria-live="polite" aria-atomic="true" data-delay="6000" style={{position: 'absolute', top: '80px', right: '20px'}}>
                    <div className="toast-header bg-success text-light">
                        <span className="rounded mr-2"><i className="fas fa-bell"></i></span>
                        <strong className="mr-auto">Notification</strong>
                        <small>Just now</small>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        Your order was successful! Thank you. <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notify;