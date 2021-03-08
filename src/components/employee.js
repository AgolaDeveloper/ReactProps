 import React from 'react'
 import './employee.css';

 function Emp(props){
        //  employee=
        //  {
            //  var name= Owino;
            //  var age= 23;
            //  var profession= Developer;
            //  var salary= 'KES 230000';
        //  }
         

        
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
        </div>
    )
 }

 export default Emp;