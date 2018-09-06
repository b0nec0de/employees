import React from 'react';
// import PropTypes from 'prop-types';

import MenuList from './MenuList';

const Menu = props => {
	return (
		<div className="menu">
			<MenuList />
			<button type="button" value="Add Item" className="button button-add">
				Add Item
			</button>
		</div>
	);
};

// Menu.propTypes = {
// 	children: PropTypes.array
// };

export default Menu;
