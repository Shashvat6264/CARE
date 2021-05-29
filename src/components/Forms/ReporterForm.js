import React, { Component } from 'react'
import getWeb3 from '../../utils/getWeb3.js';
import ChildOwnership from '../../contracts/ChildOwnership.json';

class ReporterForm extends Component {
    constructor(){
        super();
        this.state = {
          web3: '',
          address: '',
        };
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

    registerReporter(){
        const contract = require('truffle-contract');
        const Ownership = contract(ChildOwnership);
        Ownership.setProvider(this.state.web3.currentProvider);
        var OwnershipInstance;
        this.state.web3.eth.getAccounts((error, accounts) => {
            Ownership.deployed().then((instance) => {
                OwnershipInstance = instance
            }).then((result) => {
                var name = document.getElementById("name").value;
                return OwnershipInstance.registerReporter.call(name, {from: accounts[0]});
            }).catch((error) => {
                console.log("Error: " + error);
            })
        })
    }

    render(){
        return (
            <div id="login-box">
                <div class="left">
                    <div style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                        <h1>Sign up</h1>
                        <input type="text" id="name" name="name" placeholder="Your Name" />
                        <input type="text" name="email" placeholder="E-mail" />
                        <input type="text" name="address" placeholder="Address" />
                        <input type="submit" onClick={this.registerReporter} name="signup_submit" value="Sign me up" />           
                    </div>
                </div>
            </div>
        )
    }
}

export default ReporterForm
