var Migrations = artifacts.require('./Migrations.sol')

module.exports = function(deployer) {
  console.log("Deploying first migration with deployer...", deployer);
  deployer.deploy(Migrations)
}
