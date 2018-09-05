import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {
	return <div>{props.children}</div>;
};

Menu.propTypes = {
	children: PropTypes.array
};

export default Menu;
