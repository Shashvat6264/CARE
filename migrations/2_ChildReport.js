const ChildReports = artifacts.require("ChildReport");

module.exports = function (deployer) {
  deployer.deploy(ChildReports);
};
