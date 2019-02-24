/**
 * Main home page
 */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '../components/List';
import NavLink from '../components/NavLink';
import appActions from '../actions/appActions';

class HomeContainer extends Component {
  componentDidMount() {
    const { homeData, appActions: { fetchHomeData } } = this.props;

    if (!homeData.length) fetchHomeData();
  }

  render() {
    const { homeData } = this.props;
    console.log('homeData: ', homeData);

    return (
      <Fragment>
        <h1>Home Page</h1>
        <List listItems={homeData} />
        <NavLink ctaText='About Us' route='about'>About Us</NavLink>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeData: state.app.homeData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);