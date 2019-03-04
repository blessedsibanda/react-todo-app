import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
		this.addItem = this.addItem.bind(this);
	}

	addItem(e) {
		e.preventDefault();
		let itemArray = this.state.items;

		if (this._inputElement.value !== '') {
			itemArray.unshift({
				text: this._inputElement.value,
				key: Date.now()
			});
		}
		this.setState({
			items: itemArray
		});

		this._inputElement.value = '';
	}
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input
							ref={a => (this._inputElement = a)}
							placeholder="enter task"
							type="text"
						/>
						<button type="submit">add</button>
					</form>
				</div>
				<TodoItems entries={this.state.items} />
			</div>
		);
	}
}

export default TodoList;
