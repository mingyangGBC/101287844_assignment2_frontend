import React, {useState} from 'react';
import EmployeeFunctions from '../employeeFunctions'
import { useHistory } from 'react-router-dom'


const initialState ={
    fName: '',
    lName: '',
    email: ''
}
const AddEmployee=()=>{
    const [state, setState]=useState(initialState);
    const{fName,lName,email}= state;
    const history=useHistory();
    const addEmployee = async(data)=>{  
        const res=await EmployeeFunctions.createEmployee(data);
        if(res.data==='Employee added!'){
            alert("Add Success");
            setTimeout(()=> history.push("/employees"),500);
        }
        else{
            alert("Enter correct email")
        }
    }

const handleInputChange = (e) =>{
    let { name, value  }= e.target;
    setState({ ...state, [name]:value});
}
    
const handleSubmit =(e) =>{
    e.preventDefault();
    if(!fName || !email || !lName){
        alert("Need all information")
    }
    else{
        addEmployee(state);
    }
}
 
const cancel=()=>{
    history.push('/employees');
}

    return (
        <div>
            <br/>
               <h2 className="text-center">Add New Employee</h2>
                <div className="text-center">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="fName" style={{margin:10}}>First Name: </label>
                        <input type="text" placeholder="First Name" name="fName" value={fName} onChange={handleInputChange} required/>
                    
                        <br/>

                        <label htmlFor="lName" style={{margin:10}}>Last Name: </label>
                        <input type="text" placeholder="Last Name" name="lName" value={lName} onChange={handleInputChange} required/>

                        <br/>
                    
                        <label htmlFor="email" style={{width:"85px", margin:10}}>Email: </label>
                        <input type="email" placeholder="Email Address" name="email" value={email} onChange={handleInputChange} required/>

                        <br/>

                        <button style={{margin:"10px"}} className="btn btn-primary" onClick={handleSubmit}>Save</button>
                        <button className="btn btn-primary" onClick={()=>{cancel()}}>Cancel</button>
                    </form>
                </div>
        </div>
    );
}


export default AddEmployee;