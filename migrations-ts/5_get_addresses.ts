const Migrations = artifacts.require("Migrations");
const Multicall = artifacts.require("Multicall");
const WETH = artifacts.require("WETH9");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2Router02 = artifacts.require("UniswapV2Router02")

const Token1 = artifacts.require("Token1");
const Token2 = artifacts.require("Token2");
const Token3 = artifacts.require("Token3");

module.exports = async function (deployer) {
  const MigrationsInstance = await Migrations.deployed()
  const MulticallInstance = await Multicall.deployed()
  const WETHInstance = await WETH.deployed()
  const UniswapV2FactoryInstance = await UniswapV2Factory.deployed()
  const UniswapV2Router02Instance = await UniswapV2Router02.deployed()

  const Token1Instance = await Token1.deployed()
  const Token2Instance = await Token2.deployed()
  const Token3Instance = await Token3.deployed()

  const WETHToken1Pair = await UniswapV2FactoryInstance.getPair(WETHInstance.address, Token1Instance.address)

  const addresses = {
    Migrations: MigrationsInstance.address,
    Multicall: MulticallInstance.address,
    WETH: WETHInstance.address,
    UniswapV2Factory: UniswapV2FactoryInstance.address,
    UniswapV2Router02: UniswapV2Router02Instance.address,
    Token1: Token1Instance.address,
    Token2: Token2Instance.address,
    Token3: Token3Instance.address,
    WETHToken1Pair
  }

  console.debug(addresses)


} as Truffle.Migration

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export { }