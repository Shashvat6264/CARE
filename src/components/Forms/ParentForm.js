import React from 'react'

function ParentForm() {
    return (
        <div>
            <h1>Sign up</h1>
            <input type="text" name="name" placeholder="Name of Guardian" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="text" name="address" placeholder="Address" />
            <input type="submit" name="signup_submit" value="Sign me up" />           
        </div>
    )
}

export default ParentForm
