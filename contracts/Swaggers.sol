// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Swaggers is ERC721 {
    string[] public swaggers;
    mapping(string => bool) _swaggerExists;

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Swaggers", "SWGS") {}

    function safeMint(address to, string memory _swagger) public returns (uint256) {
        require(!_swaggerExists[_swagger], "This badboy has already been minted.");
        uint256 tokenId = _tokenIdCounter.current();
        swaggers.push(_swagger);
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        return tokenId;
    }

    function mintedNFTs() external view returns (string[] memory) {
        return swaggers;
    }
}