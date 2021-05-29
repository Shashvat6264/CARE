const ChildOwnerships = artifacts.require("ChildOwnership");

module.exports = function (deployer) {
  deployer.deploy(ChildOwnerships);
};
