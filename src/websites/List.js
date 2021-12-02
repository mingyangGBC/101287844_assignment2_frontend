import React, { Component, useEffect, useState } from 'react'
import EmployeeFunctions from '../employeeFunctions'
import {useHistory} from 'react-router-dom'



const EmployeeList = () =>{

    const [data,setData]=useState([]);
    const history=useHistory();

    useEffect(()=>{
        getEmployees();
    },[])
    
    const onDeleteEmployee = async(id)=>{
        if(window.confirm("Confirm Delete")){
            const res= await EmployeeFunctions.deleteEmployee(id);
            if(res.status===200){
                alert("Delete Success");
                getEmployees();
            }
        }
    };

    const getEmployees = async()=>{
        const res= await EmployeeFunctions.getEmployees();
        if(res.status===200){
            setData(res.data);
        }
    };

    return (
        <div>
             <h2 className="text-center">Employees List</h2>
             <br></br>
             <div >
                <div>

                    <thead>
                        <tr>
                            <th style={{width:"150px"}}>First Name</th>
                            <th style={{width:"150px"}}>Last Name</th>
                            <th style={{width:"400px"}}>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        { data && data.map((e, i)=>{
                            return(
                                <tr key = {i} style={{height:50}}>
                                    <td> {e.fName} </td>   
                                    <td> {e.lName}</td>
                                    <td> {e.email}</td>
                                    <td style={{width:"100px"}}>
                                    <div>
                                        <a href={`/update/${e._id}`}>
                                            <button style={{width:"80px"}} className="btn btn-primary">Update</button>
                                        </a>
                                    </div>
                                    </td>
                                    <td style={{width:"100px"}}>
                                    <div>  
                                        <button style={{width:"80px"}} onClick={ () => onDeleteEmployee(e._id)} className="btn btn-primary">Delete </button>
                                    </div>
                                    </td>
                                    <td> 
                                    <div>
                                        <a href={`/view/${e._id}`}>
                                            <button style={{width:"80px"}} className="btn btn-primary">View </button>
                                        </a>
                                    </div>
                                    </td>
                                </tr>
                        )
                        })}
                        
                    </tbody>
                </div>

             </div>

        </div>
    );
}
export default EmployeeList;