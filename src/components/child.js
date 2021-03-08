import React from 'react'
import './child.css';

function Child(props){
    return(
        <div>
            <h2> {props.name}'s Status</h2>
            <ul>
                <li>He is a {props.status} guy, with {props.child} children</li>
                <li>He lives in {props.estate} posh estate</li>

            </ul>
        </div>
    )
}

export default Child;