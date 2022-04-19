import { ethers } from 'ethers';
import { swaggersAbi } from '../../components/Contracts/swaggersAbi';

export async function connectWallet() {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const user = await provider.send("eth_requestAccounts", []);
    return user;
};

export async function verifyAccounts() {
    if((window as any).ethereum !== 'undefined'){
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const usr = await provider.listAccounts();
        return usr;
    };
}

export const getUser = async () => {
    if((window as any).ethereum){
        try {
            const addressArray = await (window as any).ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "👆🏽 Write a message in the text-field above.",
                address: addressArray[0],
            };
            return obj;
        } catch (error) {
            return error;
        }
    }else{
        return "You must install metamask";
    };
};

export const mintNft = async (address: string, name: string) => {
    if((window as any).ethereum){
        const { ethereum } = window as any;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(process.env.NEXT_PUBLIC_SWAGGERS_ADDRESS as string, swaggersAbi, signer);
        try {
            const tx = await contract.safeMint(address, name);
            await tx.wait();
            return {transactionUrl: `https://ropsten.etherscan.io/tx/${tx.hash}`};
        } catch (error) {
            return error;
        }
    }
};

export const readContract = async () => {
    const network = { name: 'ropsten', chainId: 3 };
    const alchemyProvider = new ethers.providers.AlchemyProvider(network, process.env.ALCHEMY_API_KEY);
    const swaggersContract = new ethers.Contract(process.env.NEXT_PUBLIC_SWAGGERS_ADDRESS as string, swaggersAbi, alchemyProvider);
    const data = await swaggersContract.mintedNFTs();
    return data;
};