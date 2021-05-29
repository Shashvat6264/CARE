import React from 'react'

function ReporterForm() {
    return (
        <div id="login-box">
            <div class="left">
                <div style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                    <h1>Sign up</h1>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="text" name="email" placeholder="E-mail" />
                    <input type="text" name="address" placeholder="Address" />
                    <input type="submit" name="signup_submit" value="Sign me up" />           
                </div>
            </div>
        </div>
    )
}

export default ReporterForm
