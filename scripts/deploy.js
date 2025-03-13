const hre = require("hardhat");

async function main() {
    // Get the contract factory
    const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");

    // Deploy the contract
    const simpleStorage = await SimpleStorage.deploy();

    // Wait for the contract deployment to be completed
    await simpleStorage.waitForDeployment();

    // Retrieve and log the contract address properly
    const contractAddress = await simpleStorage.getAddress();
    console.log("SimpleStorage deployed to:", contractAddress);
}

// Run the script and handle errors
main().catch((error) => {
    console.error(error);
    process.exit(1);
});
