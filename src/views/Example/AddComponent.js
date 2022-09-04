import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.title || !this.state.salary) {
            return alert('Vui lòng nhập đầy đủ thông tin!')
        }
        this.props.addNewJob({ 
            id: Math.floor(Math.random() * 100), 
            title: this.state.title, 
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Title:</label><br />
                <input id="fname" type="text" value={this.state.title} onChange={(event) => this.handleChangeTitle(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input id="lname" type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br />
                <input type="submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}

export default AddComponent;