import React, { Component } from 'react'
import EmployeeFunctions from '../employeeFunctions'

class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fName: '',
            lName: '',
            email: ''
        }
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        EmployeeFunctions.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({fName: employee.fName,
                lName: employee.lName,
                email : employee.email
            });
        });
    }
    
    changeFirstName= (event) => {
        this.setState({fName: event.target.value});
    }

    changeLastName= (event) => {
        this.setState({lName: event.target.value});
    }

    changeEmail= (event) => {
        this.setState({email: event.target.value});
    }

    update = (e) => {
        e.preventDefault();
        let employee = {fName: this.state.fName, lName: this.state.lName, email: this.state.email};
        EmployeeFunctions.updateEmployee(employee, this.state.id).then( res => {
            if(res.data==='Employee updated!'){
                alert("Update Success");
                this.props.history.push('/employees');
                 }
            
        });
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br/>
                    <h2 className="text-center">Update Employee</h2>
                    <div className="text-center">
                        <form>
                            <div>
                                <label>First Name: </label>
                                <input placeholder="First Name" name="fName" value={this.state.fName} onChange={this.changeFirstName}/>
                            </div>
                            <br/>
                            <div>
                                <label>Last Name: </label>
                                <input placeholder="Last Name" name="lName"value={this.state.lName} onChange={this.changeLastName}/>
                            </div>
                            <br/>
                            <div>
                                <label>Email: </label>
                                <input placeholder="Email" name="email"value={this.state.email} onChange={this.changeEmail}  style={{width:"230px"}}/>
                            </div>
                            <br/>
                            <button style={{margin:"10px"}} className="btn btn-primary" onClick={this.update}>Save</button>
                            <button style={{margin:"10px"}} className="btn btn-primary" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        </form>
                    </div>
            </div>
        )
    }
}

export default Update;