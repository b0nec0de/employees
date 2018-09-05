import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

import Content from '../components/Content';
import Menu from '../components/Menu';

const employees = [
	{
		id: 1,
		name: 'Иванов Иван Иванович',
		position: 'директор'
	},
	{
		id: 2,
		name: 'Сидоров Сидор Сидорович',
		position: 'менеджер'
	}
];

class App extends Component {
	state = {
		employees
	};

	render() {
		return (
			<div className="app">
				<Content list={this.state.employees} />
				<Menu />
			</div>
		);
	}
}

export default hot(module)(App);
