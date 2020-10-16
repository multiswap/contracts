pragma solidity >=0.6.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token3 is ERC20('Token3', 'TOK3') {
    constructor() public {
        _mint(msg.sender, 1000000000000000000);
    }
}
