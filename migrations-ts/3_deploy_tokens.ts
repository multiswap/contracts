const Token1 = artifacts.require("Token1");
const Token2 = artifacts.require("Token2");
const Token3 = artifacts.require("Token3");

module.exports = async function (deployer) {

  await Promise.all([
    deployer.deploy(Token1),
    deployer.deploy(Token2),
    deployer.deploy(Token3)
  ])

} as Truffle.Migration

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export { }