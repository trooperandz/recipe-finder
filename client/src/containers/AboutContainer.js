/**
 * About page
 */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import List from '../components/List';
import NavLink from '../components/NavLink';
import appActions from '../actions/appActions';

class AboutContainer extends Component {
  componentDidMount() {
    const { aboutData, appActions: { fetchAboutData } } = this.props;

    if (!aboutData.length) fetchAboutData();
  }

  render() {
    const { aboutData } = this.props;
    console.log('aboutData: ', aboutData);

    return (
      <Fragment>
        <h1>About Page</h1>
        <List listItems={aboutData} />
        <NavLink ctaText='Home' route=''>Home</NavLink>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    aboutData: state.app.aboutData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
}

AboutContainer.propTypes = {
  aboutData: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutContainer);
