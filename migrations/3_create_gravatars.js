const GravatarRegistry = artifacts.require('./GravatarRegistry.sol')

module.exports = async function(deployer) {
  console.log(deployer.provider.addresses);

  // throw("NO")
  const registry = await GravatarRegistry.deployed()

  console.log('Account address:', registry.address)

  let accounts = deployer.provider.addresses;
  await registry.createGravatar('Carl', 'https://thegraph.com/img/team/team_04.png', {
    from: accounts[1],
  })
  await registry.createGravatar('Lucas', 'https://thegraph.com/img/team/bw_Lucas.jpg', {
    from:  accounts[2],
  })
}
