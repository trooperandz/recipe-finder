/**
 * Main home page
 */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '../components/List';
import Link from '../components/Link';
import { fetchHomeData } from '../actions/appActions';

class HomeContainer extends Component {
  componentDidMount() {
    const { homeData, fetchHomeData } = this.props;

    if (!homeData.length) fetchHomeData();
  }

  render() {
    const { homeData } = this.props;
    console.log('homeData: ', homeData);

    return (
      <Fragment>
        <h1>Home Page</h1>
        <List listItems={homeData} />
        <Link ctaText='About Us' route='/about'>About Us</Link>
      </Fragment>
    );
  }
}

function mapStateToProps({app}) {
  return {
    homeData: app.homeData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchHomeData: bindActionCreators(fetchHomeData, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);