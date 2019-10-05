import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import './styles.css';

 class Results extends Component {
    render() {
        const { results } = this.props;
        return (
           <Page results={results} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        results: state.results,
    }
};

export default connect(mapStateToProps)(Results);