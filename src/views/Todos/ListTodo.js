import React from 'react';
import './ListTodo.scss'
import AddComponent from './AddComponent'
import { ToastContainer, toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodo: [
            { id: 'todo1', title: 'homework' },
            { id: 'todo2', title: 'working' },
            { id: 'todo3', title: 'fixbug' }
        ]
    }

    addTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Wow so easy!");
    }

    render() {
        let { listTodo } = this.state;
        return (
            <div className="list-todo-container">
                <AddComponent addTodo={this.addTodo} />
                <br />
                <div className="list-todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child mb-10" key={item.id}>
                                    <span className='mr-10'>{index + 1} - {item.title}</span>
                                    <button className='mr-10 edit'>Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo