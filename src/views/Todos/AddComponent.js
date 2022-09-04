import React from 'react';
import './ListTodo.scss'

class AddComponent extends React.Component {
    state = {
        title: '',
    }

    handleAddTodo = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.title) {
            return alert('Vui lòng nhập đầy đủ thông tin!')
        }
        this.props.addTodo({
            id: Math.floor(Math.random() * 100), 
            title: this.state.title 
        }) 
        this.setState({
            title: '',
        })
    }
    render() {
        let {title} = this.state
        return (
            <div className="list-todo-container">
                <div className="add-todo">
                    <input type="text" className="mr-10" value={title} onChange={(event) => this.handleAddTodo(event)} />
                    <button type="button" className="add" onClick={(event) => this.handleSubmit(event)}>Add</button>
                </div>
            </div>
        )
    }
}

export default AddComponent