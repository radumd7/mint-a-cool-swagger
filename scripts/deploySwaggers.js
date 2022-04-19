async function main() {
    // Grab the contract factory
    const Swaggers = await ethers.getContractFactory("Swaggers");
 
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await Swaggers.deploy(); // Instance of the contract
    console.log("Contract deployed to address:", myNFT.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });