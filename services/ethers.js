import { ethers } from "ethers";
import certiCheckAbi from "@/contracts/CertiCheck.json";
const provider = new ethers.JsonRpcProvider(
  "https://rpc.ankr.com/polygon_mumbai"
);

const certiCheckAddress = "0xf3a31fcb8fd455504109d62123c4892d0812f9ef";

const contract = new ethers.Contract(
  certiCheckAddress,
  certiCheckAbi,
  provider
);

const ethersService = {
  getBalance: async (address) => {
    try {
      const balance = await provider.getBalance(address);
      return ethers.formatEther(balance);
    } catch (error) {
      console.error("Error getting balance:", error);
      throw error;
    }
  },

  safeMint: async () => {
    try {
      const wallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIVATE_KEY,
        provider
      );
      const contractWithSigner = contract.connect(wallet);
      const result = await contractWithSigner.safeMint(wallet.address, "");
      console.log("Interaction successful:", result);
    } catch (error) {
      console.error("Error interacting with ERC721 contract:", error);
      throw error;
    }
  },

  getTokenURI: async (tokenId) => {
    try {
      const tokenURI = await contract.tokenURI(tokenId);
      return tokenURI;
    } catch (error) {
      console.error("Error getting token URI:", error);
      throw error;
    }
  },

  getLatestTokenId: async () => {
    try {
      const latestTokenId = await contract.nextTokenId();
      return latestTokenId;
    } catch (error) {
      console.error("Error getting latest token ID:", error);
      throw error;
    }
  },
};

export default ethersService;
