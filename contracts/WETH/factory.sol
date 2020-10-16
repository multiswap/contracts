pragma solidity >=0.4.23;

import './weth9.sol';

contract DSWethFactory {
    event LogMake(address indexed creator, address token);

    function make() public returns (WETH9 result) {
        result = new WETH9();
        emit LogMake(msg.sender, address(result));
    }
}
