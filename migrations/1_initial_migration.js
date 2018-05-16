var Migrations = artifacts.require("./Migrations.sol");
var serpentio = artifacts.require("./serpentio.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(serpentio);
};
