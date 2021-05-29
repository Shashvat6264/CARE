import React from 'react'

function OrgForm() {
    return (
        <div id="login-box" style={{height: "450px"}}>
            <div class="left">
                <div style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                    <h1>Sign up</h1>
                    <input type="text" name="name" placeholder="Organisation Name" />
                    <input type="text" name="email" placeholder="E-mail" />
                    <input type="text" name="address" placeholder="Address" />
                    <input type="text" name="description" placeholder="Description" />
                    <input type="text" name="website" placeholder="Website" />
                    <input type="submit" name="signup_submit" value="Sign me up" />           
                </div>
            </div>
        </div>
    )
}

export default OrgForm
