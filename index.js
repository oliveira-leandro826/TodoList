class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {is_done: false};
	}

	done = () =>{
		this.setState({is_done:true})
	}

	render() {
		return (
			<li onClick={this.done} style={this.state.is_done==true? {textDecoration: "line-through"}: {} }>
				{this.props.task}
			</li>
		);
	}
}	

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			to_do_list: ['Finish this test', 'Get hired', 'Change the world']
		};
	}

	changeInput = (event) =>{
		this.setState({value:event.target.value})

	}

	addToDoItem = () =>{
		this.setState({to_do_list: [...this.state.to_do_list, this.state.value], value: ''})

	}

	render() {
		return (
			<div>
				<h2>Add a new task to your to-do list</h2>
				<input type="text" value={this.state.value} onChange={this.changeInput} />
				<button onClick={this.addToDoItem} >Add</button>
				<ul>
					{this.state.to_do_list.map((task_text) =>
						<ToDoItem task={task_text} />
					)}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<ToDoList/>,
	document.getElementById('root')
);

/*
Developed by Leandro Oliveira
*/
