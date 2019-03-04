import React, { Component } from 'react';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<TodoList />
			</div>
		);
	}
}

export default App;
