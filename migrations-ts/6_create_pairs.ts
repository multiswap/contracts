const WETH = artifacts.require("WETH9");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2Router02 = artifacts.require("UniswapV2Router02")

const Token1 = artifacts.require("Token1");
const Token2 = artifacts.require("Token2");
const Token3 = artifacts.require("Token3");

module.exports = async function (deployer, networks, accounts) {
  const account = accounts[0]

  const WETHInstance = await WETH.deployed()
  const Token1Instance = await Token1.deployed()
  const Token2Instance = await Token2.deployed()
  const Token3Instance = await Token3.deployed()

  const UniswapV2FactoryInstance = await UniswapV2Factory.deployed()
  const UniswapV2Router02Instance = await UniswapV2Router02.deployed()


  const deadline = 2000000000
  const amountTokenDesired = 1000000000000000
  const amountTokenMin = 1
  const amountETHMin = 1

  const balance = await Token1Instance.balanceOf(account)

  await UniswapV2FactoryInstance.createPair(Token1Instance.address, WETHInstance.address)
  await UniswapV2FactoryInstance.createPair(Token1Instance.address, Token2Instance.address)
  await UniswapV2FactoryInstance.createPair(Token2Instance.address, Token3Instance.address)

  await Token1Instance.increaseAllowance(UniswapV2Router02Instance.address, balance)

  await UniswapV2Router02Instance.addLiquidityETH(
    Token1Instance.address, amountTokenDesired, amountTokenMin, amountETHMin,
    account, deadline,
    { from: account, value: `${amountTokenDesired}` })

} as Truffle.Migration

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export { }
