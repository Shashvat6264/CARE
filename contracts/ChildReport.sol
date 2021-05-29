// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract ChildReport{
    enum GuardianType{REPORTER, PARENT}
    
    struct Guardian{
        string name;
        GuardianType guardianType;
    }
    
    struct Child{
        string name;
    }
    
    struct Organisation{
        string name;
        address addr;
    }
    
    Guardian[] private guardians;
    Child[] private children;
    Organisation[] private organisations;
    
    mapping (address => uint) public addressToOrganisation; 
    mapping (address => uint) public addressToGuardian;
    mapping (uint => uint[]) public organisationToChildren;
    mapping (uint => address) public childToCareTaker;
    
    event registeredGuardian(string msg, uint id);
    event registeredChild(string msg, uint id);
    event registeredOrganisation(string msg, uint id);
    
    modifier onlyCareTakerOf(uint256 _tokenID){
        assert(msg.sender == childToCareTaker[_tokenID]);
        _;
    }
    
    function registerReporter(string memory _name) public {
        Guardian memory reporter = Guardian(_name, GuardianType.REPORTER);
        guardians.push(reporter);
        addressToGuardian[msg.sender] = guardians.length - 1;
        emit registeredGuardian("Succesfully registered reporter", guardians.length - 1);
    }
    
    function registerParent(string memory _name) public {
        Guardian memory parent = Guardian(_name, GuardianType.PARENT);
        guardians.push(parent);
        addressToGuardian[msg.sender] = guardians.length - 1;
        emit registeredGuardian("Succesfully registered Parent", guardians.length - 1);
    }
    
    function registerChild(string memory _name) public {
        Child memory child = Child(_name);
        children.push(child);
        childToCareTaker[children.length - 1] = msg.sender;
        emit registeredChild("Successfully registered child", children.length - 1);
    }
    
    function registerOrganisation(string memory _name) public {
        Organisation memory organisation = Organisation(_name, msg.sender);
        organisations.push(organisation);
        addressToOrganisation[msg.sender] = organisations.length - 1;
        emit registeredOrganisation("Succesfully registered organisation", organisations.length - 1);
    }
    
    function getOrganisationDetails(uint _id) public view returns(Organisation memory){
        return organisations[_id];
    }
    
    function getGuardianDetails(uint _id) public view returns(Guardian memory){
        return guardians[_id];
    }
    
    function sendDonation(uint _orgId) public payable {
        uint256 amount = msg.value;
        address payable receiver = payable(organisations[_orgId].addr);
        receiver.transfer(amount);
    }
    
}