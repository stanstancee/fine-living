import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class ProductDetails extends Component {
    render() {
        return (
            <div>
                <Link to="/">Go Back</Link>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ProductDetails);