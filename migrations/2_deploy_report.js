const lostfound = artifacts.require('./ChildReport');

module.exports = function(deployer){
    deployer.deploy(lostfound);
};