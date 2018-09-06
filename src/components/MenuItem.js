import React from 'react';

const MenuItem = props => {
	return (
		<div className="menuItem">
			<form>
				<label>
					Item #<textarea name="" id="" cols="30" rows="7" />
				</label>
				<button type="button" value="Remove" className="button button-remove">
					Remove
				</button>
			</form>
		</div>
	);
};

export default MenuItem;
