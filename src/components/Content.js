import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ list }) => {
	return (
		<div>
			{list.map(item => (
				<li key={item.id}>{item.name}</li>
			))}
		</div>
	);
};

Content.propTypes = {
	list: PropTypes.array
};

export default Content;
