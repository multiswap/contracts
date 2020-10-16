const Multicall = artifacts.require("Multicall");
const WETH = artifacts.require("WETH9");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2Router02 = artifacts.require("UniswapV2Router02")

module.exports = async function (deployer) {
  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"
  await deployer.deploy(Multicall);
  await deployer.deploy(WETH);
  await deployer.deploy(UniswapV2Factory, ZERO_ADDRESS);
  await deployer.deploy(UniswapV2Router02, UniswapV2Factory.address, WETH.address);

} as Truffle.Migration

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export { }
