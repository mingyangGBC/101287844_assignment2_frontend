import React from 'react';

const  NavigationBar =()=> {

    return (
        <div className="text-center">
        <h1>Employee Assignment</h1>
                <div>
                    <a href='/'id="navItem" style={{padding:20, fontSize:30}}>Employee List</a>
                    <a href='/add' id="navItem" style={{padding:20, fontSize:30}}>Add</a>
                </div>
        </div>
    )
}

export default NavigationBar;