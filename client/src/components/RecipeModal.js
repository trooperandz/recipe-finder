/**
 * The recipe detail modal
 */

import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import appActions from '../actions/appActions';

class RecipeModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isModalActive: true,
    };
  }

  render() {
    const { isModalActive } = this.state;

    if (isModalActive) {
      return (
        <div className="recipe-modal-wrapper">
          <div className="recipe-modal">
            this is a modal
          </div>
        </div>
      );

      return null;
    }
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(
  mapStateToProps,
)(RecipeModal);
