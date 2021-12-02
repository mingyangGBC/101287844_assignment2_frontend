import React, { Component } from 'react'
import EmployeeFunctions from '../employeeFunctions'

class View extends Component {
    constructor(props) {
        super(props)
     
        this.state = {
            id: this.props.match.params.id,
            employee: {},
        }
    }
    
    componentDidMount(){
        EmployeeFunctions.getEmployeeById(this.state.id).then( res =>
            {this.setState({employee: res.data});
        })
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div className = "text-center">
                <h3>Details</h3>
                <div>
                    <div>
                        <label>First Name: { this.state.employee.fName }</label>
                    </div>
                    <div>
                        <label>Last Name: { this.state.employee.lName }</label>
                    </div>
                    <div>
                        <label>Email: { this.state.employee.email }</label>
                    </div>
                    <div>
                    <button  className="btn btn-primary" onClick={this.cancel.bind(this)}>Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default View
