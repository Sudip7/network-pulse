import React from 'react';
import { Link } from 'react-router';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

class NavLink extends React.Component {
  constructor() {
    super();
    this.handleInternalPageLinkClick = this.handleInternalPageLinkClick.bind(this);
  }

  handleInternalPageLinkClick() {
    ReactGA.event({
      category: `Nav Link`,
      action: `Clicked`,
      label: `${this.props.to}`
    });
  }

  render() {
    return (
      <Link {...this.props} activeClassName="active" onClick={this.handleInternalPageLinkClick} />
    );
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default NavLink;
