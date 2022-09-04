import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'Job A', title: 'Developer', salary: '500' },
            { id: 'Job B', title: 'Tester', salary: '400' },
            { id: 'Job C', title: 'PM', salary: '600' }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job] // gộp object
        })
    }

    RemoveJob = (job) => {
        this.setState({
            arrJobs: this.state.arrJobs.filter(item => item.id !== job.id) // lọc nếu khác
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJob={this.state.arrJobs}
                    RemoveJob={this.RemoveJob}
                />
            </>
        )
    }
}

export default MyComponent