const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const Multicall = artifacts.require("Multicall");


module.exports = async function (deployer) {
  await deployer.deploy(Multicall);
  await deployer.deploy(UniswapV2Factory, "0x0000000000000000000000000000000000000000");

} as Truffle.Migration

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export { }
