pragma solidity >=0.6.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token1 is ERC20('Token1', 'TOK1') {
    constructor() public {
        _mint(msg.sender, 1000000000000000000);
    }
}
