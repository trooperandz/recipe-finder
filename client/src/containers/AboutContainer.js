/**
 * About page
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '../components/List';
import Link from '../components/Link';
import { fetchAboutData } from '../actions/appActions';

class AboutContainer extends Component {
  componentDidMount() {
    const { aboutData, fetchAboutData } = this.props;

    if (!aboutData.length) fetchAboutData();
  }

  render() {
    const { aboutData } = this.props;
    console.log('aboutData: ', aboutData);

    return (
      <Fragment>
        <h1>About Page</h1>
        <List listItems={aboutData} />
        <Link ctaText='Home' route='/'>Home</Link>
      </Fragment>
    );
  }
}

function mapStateToProps({app}) {
  return {
    aboutData: app.aboutData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAboutData: bindActionCreators(fetchAboutData, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutContainer);
