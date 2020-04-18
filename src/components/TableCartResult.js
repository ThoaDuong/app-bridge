import React, { Component } from 'react';


class TableCartResult extends Component {
    render() {
        return (
                <div className="text-right mt-3 mr-4">
                    <h4>Total: ${ this.props.total }</h4>
                </div>
                
        );
    }
}

export default TableCartResult;