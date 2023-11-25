// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MyToken is ERC721, ERC721URIStorage, Ownable {
    using Strings for uint256; 

    uint256 public nextTokenId;
    string private _baseTokenURI;

    constructor(address initialOwner)
        ERC721("CertiCheck", "CERT")
        Ownable(initialOwner)
    {
         setBaseURI("https://certicheckapp.netlify.app/api/metadata/");
    }

    function setBaseURI(string memory baseURI_) public  {
        _baseTokenURI = baseURI_;
    }

    function baseURI() public view returns (string memory) {
        return _baseTokenURI;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        string memory base = baseURI();
        return bytes(base).length > 0 ? string(abi.encodePacked(base, tokenId.toString())) : "";
    }

     function contractURI() public view returns (string memory) {
        return string(abi.encodePacked(baseURI(), "contract-metadata.json"));
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }


    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
