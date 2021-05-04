import React, { useState, useEffect } from 'react'
import { receiveData } from '../api/users'

function ShowsUser() {
    const [users, setusers] = useState([])
    useEffect(() => {
        receiveData(setusers)
    }, [])
    return (
        <div className="container-fluid">
            <h3 className="heading"> User Data </h3>
            <div className="row border border-2 border-primary">
                <div className="col-3" style={{borderRight : "2px solid blue"}}><h3>  Name </h3> </div>
                <div className="col-3" style={{borderRight : "2px solid blue"}}><h3>  Username </h3> </div>
                <div className="col-3" style={{borderRight : "2px solid blue"}}><h3>  Email </h3> </div>
                <div className="col-3" style={{borderRight : "2px solid blue"}}><h3>  Phone No </h3> </div>
            </div>
            {
                users && users.length && users.map(user =>
                    <div className="row border-bottom border-2 border-success" key={user._id}>
                        <div className="col" style={{borderRight:"2px solid green"}}>  {user.name}  </div>
                        <div className="col" style={{borderRight:"2px solid green"}}> {user.username}  </div>
                        <div className="col" style={{borderRight:"2px solid green"}}>{user.email}   </div>
                        <div className="col" style={{borderRight:"2px solid green"}}>{user.phoneNo} </div>

                    </div>
                )
            }
        </div>
    )
}

export default ShowsUser
