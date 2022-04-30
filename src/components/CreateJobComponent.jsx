import React, { Component } from 'react';
import JobService from '../services/JobService';

class CreateJobComponent extends Component {
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

        this.saveOrUpdateJob = this.saveOrUpdateJob.bind(this);



    }

    componentDidMount(){
        if  (this.state.id === '_add'){
            return
        }
        else{
            JobService.getJobById(this.state.id).then((res)=>{
                let job =res.data;
                this.setState({jobName: job.jobName,
                    jobSalary : job.jobSalary,
                    jobTiming:job.jobTiming,
                    jobDescription:job.jobDescription
                    
                });
                
            });

        }
     
    }

    saveOrUpdateJob = (e)=>{
        e.preventDefault();

        let job ={jobName : this.state.jobName , jobSalary : this.state.jobSalary ,jobTiming:this.state.jobTiming ,jobDescription:this.state.jobDescription};
        console.log('job => '+ JSON.stringify(job));


        if  (this.state.id === '_add'){
            JobService.createJob(job).then (res=>{
                this.props.history.push('/jobs');
            });
        }
        else{
            JobService.updateJob(job,this.state.id).then(res=>{
                this.props.history.push('/jobs');
    
    
            });

            
        }

      
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

    getTitle(){
        if(this.state.id === '_add'){
           return <h3 className="text-center">Add New Job</h3>

        }else{
            return <h3 className="text-center">Update Job</h3>

        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group ">
                                        <label>Job Name :</label>
                                        <input placeholder="Job Name" name="jobName" className="form-control" 
                                        value={this.state.jobName} onChange={this.changeJobNameHandler}/>
                                    </div>
                                    <div className="form-group ">
                                        <label>Job Salary :</label>
                                        <input placeholder="Job Code" name="jobSalary" className="form-control" 
                                        value={this.state.jobSalary} onChange={this.changeJobSalaryHandler}/>
                                    </div>
                                    <div className="form-group ">
                                        <label>job Timing :</label>
                                        <input placeholder="Job Timing" name="jobTiming" className="form-control" 
                                        value={this.state.jobTiming} onChange={this.changeJobTimingHandler}/>
                                    </div>
                                    <div className="form-group ">
                                        <label>Job Description</label>
                                        <input placeholder="Job Description" name="jobDescription" className="form-control" 
                                        value={this.state.jobDescription} onChange={this.changeJobDescriptionHandler}/>
                                    </div><br/>
                                    <button className="btn btn-dark btn-sm" onClick={this.saveOrUpdateJob}>Save</button>
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

export default CreateJobComponent;