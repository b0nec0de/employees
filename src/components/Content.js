import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Content = ({ list, toggleMenu, isShown }) => {
	return (
		<div className="content">
			<h1>Employee List</h1>
			<ul className="list">
				{list.map(item => (
					<li className="listItem" key={item.id}>
						<span className="itemName">{item.name}</span>
						<span className="itemPosition">{item.position}</span>
					</li>
				))}
			</ul>
			<Button
				toggleMenu={toggleMenu}
				isShown={isShown}
<<<<<<< HEAD
				className={isShown ? 'button-edit' : 'button-close'}
=======
				className={isShown ? 'button-close' : 'button-edit'}
>>>>>>> 418d8376ad85e9bd988883d644547bed5669e4f0
			/>
		</div>
	);
};

Content.propTypes = {
	list: PropTypes.array,
	toggleMenu: PropTypes.func,
	isShown: PropTypes.bool
};

export default Content;
