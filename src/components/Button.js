import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
	const button = props.isShown ? 'Close Menu' : 'Edit list';
	return (
		<button
			type="button"
			className="button button-edit"
			onClick={props.toggleMenu}
		>
			{button}
		</button>
	);
};

Button.propTypes = {
	toggleMenu: PropTypes.func,
	text: PropTypes.string,
	isShown: PropTypes.bool
};

export default Button;
