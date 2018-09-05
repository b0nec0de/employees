import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Content = ({ list }) => {
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
			<Button />
		</div>
	);
};

Content.propTypes = {
	list: PropTypes.array
};

export default Content;
