import React from 'react';
// import './Demo.scss';
import styles from './DemoModule.module.css';

class ChildComponent extends React.Component {
    state = {
        showJob: false,
    }

    handleShowHide = () => {
        this.setState({ showJob: !this.state.showJob });
    }

    handleRemove = (job) => {
        console.log(job)
        this.props.RemoveJob(
            job
        )
    }

    render() {
        console.log(styles);
        let { arrJob } = this.props;
        let { showJob} = this.state;
        return (
            <>
                {!showJob && <div><button className={`${styles.btn_show} ${styles.fontSize}` } onClick={() => this.handleShowHide()}>Show</button></div>}
                {showJob && 
                    <>
                        <div className="job-list">
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $
                                            <button className="close" onClick={() => this.handleRemove(item)}>&times;</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

// function component

// const ChildComponent = (props) => {
//     console.log(props)
//     return (
//         <div>
//             hello test
//         </div>
//     );
// }

export default ChildComponent