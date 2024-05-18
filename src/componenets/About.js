import React from 'react'

export default function About() {
  return (
    <div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Adrees"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Enter Your Consern</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div>       
        <button type="button" class="btn btn-primary">Submit</button>
        </div>
    </div>
  )
}
