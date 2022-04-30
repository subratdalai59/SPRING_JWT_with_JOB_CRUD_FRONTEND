import React, { Component } from 'react';
import JobService from './src/services/JobService.js';

class UpdateJobComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id:this.props.match.params.id,
            jobName:'',
            jobSalary:'',
            jobTiming:'',
            jobDescription:''


        }
        this.changeJobNameHandler =this.changeJobNameHandler.bind(this);

        this.changeJobSalaryHandler =this.changeJobSalaryHandler.bind(this);

        this.changeJobTimingHandler =this.changeJobTimingHandler.bind(this);

        this.changeJobDescriptionHandler =this.changeJobDescriptionHandler.bind(this);

        this.updateJob = this.updateJob.bind(this);



    }
    componentDidMount(){
        JobService.getJobById(this.state.id).then((res)=>{
            let job =res.data;
            this.setState({jobName: job.jobName,
            jobSalary : job.jobSalary,
            jobTiming:job.jobTiming,
            jobDescription:job.jobDescription
                
            });
            
        });
    }

    updateJob = (e)=>{
        e.preventDefault();

        let job ={jobName : this.state.jobName , jobSalary : this.state.jobSalary ,jobTiming:this.state.JobTiming ,jobDescription:this.state.jobDescription};
        console.log('job => '+ JSON.stringify(job));
        JobService.updateJob(job,this.state.id).then(res=>{
            this.props.history.push('/jobs');


        });

       
    }
    

    changeJobNameHandler = (event)=>{
        this.setState({jobName: event.target.value});
    }
    changeJobSalaryHandler = (event)=>{
        this.setState({jobSalary: event.target.value});
    }
    changeJobTimingHandler = (event)=>{
        this.setState({jobTiming: event.target.value});
    }
    changeJobDescriptionHandler = (event)=>{
        this.setState({jobDescription: event.target.value});
    }

    cancel(){
        this.props.history.push('/jobs');

    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Job</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group ">
                                        <label>Job Name :</label>
                                        <input placeholder="Job Name" name="jobName" className="form-control" 
                                        value={this.state.jobName} onChange={this.changeJobNameHandler}/>
                                    </div>
                                    <div className="form-group ">
                                        <label>Job Salary :</label>
                                        <input placeholder="Job Salary" name="jobSalary" className="form-control" 
                                        value={this.state.jobSalary} onChange={this.changeJobSalaryHandler}/>
                                    </div>
                                    <div className="form-group ">
                                        <label>Job Timing :</label>
                                        <input placeholder="Job Timing" name="jobTiming" className="form-control" 
                                        value={this.state.jobTiming} onChange={this.changeJobTimingHandler}/>
                                    </div>
                                    <div className="form-group ">
                                        <label>Job Description :</label>
                                        <input placeholder="Job Description" name="jobDescription" className="form-control" 
                                         value={this.state.jobDescription} onChange={this.changeJobDescriptionHandler}/>
                                    </div><br/>
                                    <button className="btn btn-dark btn-sm" onClick={this.updateJob}>Save</button>
                                    <button className="btn btn-danger btn-sm"  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateJobComponent;