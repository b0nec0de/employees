import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

const MenuList = props => {
	return (
		<div>
			{props.list.map(item => (
				<MenuItem
					key={item.id}
					id={item.id}
					name={item.name}
					position={item.position}
				/>
			))}
		</div>
	);
};

MenuList.propTypes = {
	list: PropTypes.array
};

export default MenuList;
