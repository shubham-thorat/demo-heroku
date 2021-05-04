import React, { useState } from 'react'
import { sendData } from '../api/users'

function Form() {
    const [state, setstate] = useState({
        name: '',
        username: '',
        email: '',
        phoneNo: ''
    })
    const HandleSubmit = (e) => {
        // console.log(state)
        sendData(state)
        // e.preventDefault()
    }
    return (
        <form onSubmit={HandleSubmit}>
            <div className="container d-flex flex-column my-5 py-2 align-items-center justify-content-center" style={{ border: "2px solid blue" }}>
                <h3 className="heading"> Form </h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Name" value={state.name} onChange={e => setstate({ ...state, name: e.target.value })} required />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Username" value={state.username} onChange={e => setstate({ ...state, username: e.target.value })} required />
                </div>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Enter Email Address" value={state.email} onChange={e => setstate({ ...state, email: e.target.value })} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Mobile No" value={state.phoneNo} onChange={e => setstate({ ...state, phoneNo: e.target.value })} />
                </div>
                <button type="submit"> Submit Data </button>
            </div>
        </form>
    )
}

export default Form
