 import React from 'react'
 import './employee.css';

 import Child from './child.js';

 function Emp(props){
        //  employee=
        //  {
            //  var name= Owino;
            //  var age= 23;
            //  var profession= Developer;
            //  var salary= 'KES 230000';
        //  }

    var status= "married";
    var estate= "Milimani";
    var children= 3;
         

        
    return(

        <div>
            {/* <p>We have {employee.length} properties of our employee</p> */}
                <h1>HERE ARE {props.nam}'s DETAILS'</h1>  
            <ul>
                <li>Name: {props.nam}</li>
                <li>Age: {props.age}</li>
                <li>Profession: {props.profession}</li>
                <li>Basic Monthly Salary: {props.salary}</li>

            </ul>

            <Child status={status}  estate={estate} child={children} />
        </div>
    )
 }

 export default Emp;