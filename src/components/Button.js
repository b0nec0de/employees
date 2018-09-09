import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
	const button = props.isShown ? 'Close' : 'Edit';
	return (
		<button
			type="button"
			className={`button + ${props.className}`}
			onClick={props.toggleMenu}
		>
			{button}
		</button>
	);
};

Button.propTypes = {
	toggleMenu: PropTypes.func,
	text: PropTypes.string,
	isShown: PropTypes.bool,
	className: PropTypes.string
};

export default Button;
