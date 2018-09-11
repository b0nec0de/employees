import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = props => {
	return (
		<div className="menuItem">
			<form>
				<label>
					Item #{props.id}
					<textarea
						name="employee"
						cols=""
						rows="6"
						placeholder={props.name + '\n\n' + props.position}
					/>
				</label>
				<button type="button" value="Remove" className="button button-remove">
					Remove
				</button>
			</form>
		</div>
	);
};

MenuItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	position: PropTypes.string
};

export default MenuItem;
