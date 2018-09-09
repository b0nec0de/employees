import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

const MenuList = ({ children }) => {
	return (
		<div className="menuList">
			<MenuItem />
			<MenuItem />
			{children}
		</div>
	);
};

MenuList.propTypes = {
	children: PropTypes.func
};

export default MenuList;
