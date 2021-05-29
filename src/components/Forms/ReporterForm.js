import React from 'react'

function ReporterForm() {
    return (
        <div>
            <h1>Sign up</h1>
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="text" name="address" placeholder="Address" />
            <input type="submit" name="signup_submit" value="Sign me up" />           
        </div>
    )
}

export default ReporterForm
