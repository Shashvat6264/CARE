// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./ChildReport.sol";
import "./erc721.sol";

contract ChildOwnership is ChildReport, ERC721{
    
    mapping (uint => address) public childApprovals;
    
    function balanceOf(address _owner) external override view returns (uint256) {
        if (addressToOrganisation[_owner] != 0) return organisationToChildren[addressToOrganisation[_owner]].length;
        else if (addressToGuardian[_owner] != 0) return 1;
        else return 1;
    }
    
    function ownerOf(uint256 _tokenId) external override view returns (address) {
        return childToCareTaker[_tokenId];
    }
    
    function _transfer(address _from, address _to, uint256 _tokenId) public {
        if (addressToOrganisation[_from] != 0){
            assert(addressToGuardian[_to] != 0);
            childToCareTaker[_tokenId] = _to;
            uint i = 0;
            while ((i < organisationToChildren[addressToOrganisation[_from]].length)&&(organisationToChildren[addressToOrganisation[_from]][i] != _tokenId)) i++;
            if (organisationToChildren[addressToOrganisation[_from]][i] == _tokenId) delete organisationToChildren[addressToOrganisation[_from]][i];
        }
        else if (addressToGuardian[_from] != 0){
            assert(addressToOrganisation[_to] != 0);
            childToCareTaker[_tokenId] = _to;
            organisationToChildren[addressToOrganisation[_to]].push(_tokenId);
        }
        else{
            assert(false);
        }
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) external override payable {
        require(childToCareTaker[_tokenId] == msg.sender || childApprovals[_tokenId] == msg.sender);
        _transfer(_from, _to, _tokenId);
    }

    function approve(address _approved, uint256 _tokenId) external override payable onlyCareTakerOf(_tokenId){
        childApprovals[_tokenId] = _approved;
        emit Approval(msg.sender, _approved, _tokenId);
    }
}