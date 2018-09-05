import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ children }) => {
	return <div className="menu">{children}</div>;
};

Menu.propTypes = {
	children: PropTypes.array
};

export default Menu;
