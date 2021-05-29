import React, { Component } from 'react'
import getWeb3 from '../../utils/getWeb3.js';
import ChildOwnership from '../../contracts/ChildOwnership.json';

class OrgForm extends Component {
    constructor(){
        super();
        this.state = {
          web3: '',
          address: '',
        };
        this.registerOrganisation = this.registerOrganisation.bind(this);
    }
    
    componentDidMount(){
        getWeb3.then(results => {
          results.web3.eth.getAccounts((error, acc) => {
            this.setState({
              address: acc[0],
              web3: results.web3
            })
          });
        }).catch((error) => {
          console.log('Error finding web3: ' + error);
        })
    }

    registerOrganisation(){
        const contract = require('truffle-contract');
        const Ownership = contract(ChildOwnership);
        Ownership.setProvider(this.state.web3.currentProvider);
        var OwnershipInstance;
        this.state.web3.eth.getAccounts((error, accounts) => {
            Ownership.deployed().then((instance) => {
                OwnershipInstance = instance
            }).then((result) => {
                var name = document.getElementById("name").value;
                OwnershipInstance.registerOrganisation.call(name, {from: accounts[0]});
            }).catch((error) => {
                console.log("Error: " + error);
            })
        })
    }


    render(){
        return (
            <div id="login-box" style={{height: "450px"}}>
                <div class="left">
                    <div style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                        <h1>Sign up</h1>
                        <input type="text" id="name" name="name" placeholder="Organisation Name" />
                        <input type="text" name="email" placeholder="E-mail" />
                        <input type="text" name="address" placeholder="Address" />
                        <input type="text" name="description" placeholder="Description" />
                        <input type="text" name="website" placeholder="Website" />
                        <input type="submit" onClick={this.registerOrganisation} name="signup_submit" value="Sign me up" />           
                    </div>
                </div>
            </div>
        )
    }
}

export default OrgForm
