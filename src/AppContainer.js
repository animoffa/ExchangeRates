import React from 'react';
import {connect} from "react-redux";
import {getDate, getDollar, getEuro, getRate} from "./Redux/App-reducer";
import App from "./App";


class AppContainer extends React.Component {
    componentDidMount() {
        this.props.getDate();
    }

    render() {
        let formatDate = new Date(this.props.date);
        return (
            <App dollar={this.props.dollar} euro={this.props.euro} getEuro={this.props.getEuro}
                 getDollar={this.props.getDollar} getRate={this.props.getRate}
                 formatDate={formatDate}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dollar: state.App.dollar,
        euro: state.App.euro,
        date: state.App.date,
    }
};

export default connect(mapStateToProps, {
    getEuro, getDollar, getRate, getDate
})(AppContainer);