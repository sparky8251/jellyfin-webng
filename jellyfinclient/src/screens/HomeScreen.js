import React, {Component} from 'react';
import {connect} from "react-redux";

import HomeComponent from '../components/HomeComponent'


class HomeScreen extends Component {
    render() {
        return (
            <HomeComponent
                message={this.props.sampleReducer.message}
            />
        );
    }
}

function mapStateToProps({sampleReducer}) {
    return ({sampleReducer})
}


export default connect(mapStateToProps)(HomeScreen);
