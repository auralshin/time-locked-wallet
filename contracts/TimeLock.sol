pragma solidity ^0.8.6;

contract TimeLock {
    address payable public accountholder;
    mapping (address => uint256) public amount;
    mapping (address => uint256) public unlocktime;
    constructor (
        address payable _accountholder,
         uint256 unlocktime, uint256 amount
         )
        public
        payable
    {
       require(unlocktime > block.timestamp );
       accountholder = _accountholder;
       
    }
    function deposit() public payable {
        amount[msg.sender] = msg.value;
    }
  function release() public {
      require(block.timestamp >= unlocktime);
      payable(accountholder).transfer(address(this).balance);
  }

}