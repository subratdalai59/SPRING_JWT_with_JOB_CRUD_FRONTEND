import React, { Component } from 'react';
import JobService from '../services/JobService';

class ListJobComponent extends Component {
    constructor (props){
        super(props)


        this.state ={
            jobs:[]
        }

        this.addJob = this.addJob.bind(this);
        this.editJob =this.editJob.bind(this);
        this.deleteJob =this.deleteJob.bind(this);
        
    }

    deleteJob (id){
        JobService.deleteJob(id).then( res =>{

            this.setState({jobs: this.state.jobs.filter (job => job.id !== id)});
        })
    }

    viewJob (id){
        this.props.history.push(`/view-job/${id}`)
    }

    editJob(id){
        this.props.history.push(`/add-job/${id}`);

    }
    
    componentDidMount(){
        JobService.getJobs().then((res)=>{
            this.setState({jobs: res.data});
    });
    }

    addJob(){
        this.props.history.push('/add-job/_add');

    }
    render() {
        return (
            <div>
                <h2 className="text-center">ALL VACANCIES</h2>
                <div className="row">
                    <button  className="btn btn-outline-dark" onClick={this.addJob}>Add Jobs</button> 
                </div><br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr className="text-center">
                            <th>Job Name</th>
                            <th>Job Salary</th>
                            <th>Job Timing</th>
                            <th>Job Description</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.jobs.map(
                                    job =>
                                    <tr key={job.id} className="text-center">
                                        <td>{job.jobName}</td>
                                        <td>{job.jobSalary}</td>
                                        <td>{job.jobTiming}</td>
                                        <td>{job.jobDescription}</td>
                                        <td>
                                            <button onClick={() => this.editJob(job.id)} className="btn btn-dark btn-sm">Update</button>
                                            <button onClick={() => this.deleteJob(job.id)} style={{marginLeft:"10px"}}className="btn btn-danger btn-sm">Delete</button>
                                            <button onClick={() => this.viewJob(job.id)} style={{marginLeft:"10px"}}className="btn btn-secondary btn-sm">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}

export default ListJobComponent;