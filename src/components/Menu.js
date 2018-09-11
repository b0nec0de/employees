import React from 'react';
import PropTypes from 'prop-types';

import MenuList from './MenuList';

const Menu = props => {
	return (
		<div>
			{props.isShown && (
				<div className="menu">
					<MenuList list={props.list} />
					<button type="button" value="Add Item" className="button button-add">
						Add Item
					</button>
				</div>
			)}
		</div>
	);
};

Menu.propTypes = {
	isShown: PropTypes.bool,
	list: PropTypes.array
};

export default Menu;
