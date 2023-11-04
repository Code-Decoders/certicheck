// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CertificateNFT is ERC721URIStorage, Ownable {

    uint256 private _tokenIds;
    string private baseURI;

    mapping(string => uint256) private pdfIdToTokenId;
    constructor(string memory baseURI_) ERC721("CertificateNFT", "CERT" ) Ownable(msg.sender) {
        baseURI = baseURI_;
    }

    function setBaseURI(string memory baseURI_) external onlyOwner {
        baseURI = baseURI_;
    }

    function mintCertificate(address recipient, string memory pdfId)
        public
        onlyOwner
        returns (uint256)
    {
        require(pdfIdToTokenId[pdfId] == 0, "Certificate already minted");

        _tokenIds++;
        uint256 newItemId = _tokenIds;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, _constructTokenURI(pdfId));

        pdfIdToTokenId[pdfId] = newItemId;

        return newItemId;
    }

    function _constructTokenURI(string memory pdfId) private view returns (string memory) {
        return string(abi.encodePacked(baseURI, pdfId));
    }

    function verifyCertificateByPdfId(string memory pdfId, address owner) public view returns (bool isOwner) {
        uint256 tokenId = pdfIdToTokenId[pdfId];
        require(tokenId != 0, "Certificate not found");
        isOwner = ownerOf(tokenId) == owner;
    }

    function getTokenIdFromPdfId(string memory pdfId) public view returns (uint256 tokenId) {
        tokenId = pdfIdToTokenId[pdfId];
        require(tokenId != 0, "Certificate not found");
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }
}
