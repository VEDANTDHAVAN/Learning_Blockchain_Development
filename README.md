# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
# SimpleStorage-DApp

## 📝 Description
This repository contains a basic **Ethereum Smart Contract** built with **Solidity** and deployed using **Hardhat**. The contract allows users to store and retrieve a number on the blockchain. The project includes a deployment script and a Hardhat local blockchain setup for testing.

## 🚀 Features
- **Smart Contract:** A simple Solidity contract (`SimpleStorage.sol`) to store and retrieve a number.
- **Hardhat Setup:** Local Ethereum blockchain for development and testing.
- **Deployment Script:** Automates contract deployment using Hardhat.
- **Interaction Script:** Allows setting and retrieving values from the contract using Hardhat console.

## 📂 Project Structure
```
SimpleStorage-DApp/
│── contracts/
│   ├── SimpleStorage.sol  # Smart contract code
│
│── scripts/
│   ├── deploy.js          # Deployment script
│
│── test/                  # (Optional) Test cases for contract
│
│── hardhat.config.js       # Hardhat configuration file
│── package.json            # Dependencies and scripts
│── README.md               # Project documentation
```

## 💻 Setup & Usage

### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/SimpleStorage-DApp.git
cd SimpleStorage-DApp
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Compile the contract
```sh
npx hardhat compile
```

### 4️⃣ Start Hardhat local blockchain
```sh
npx hardhat node
```

### 5️⃣ Deploy the contract
```sh
npx hardhat run scripts/deploy.js --network localhost
```

### 6️⃣ Interact using Hardhat console
```sh
npx hardhat console --network localhost
```
```javascript
const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
const simpleStorage = await SimpleStorage.attach("YOUR_CONTRACT_ADDRESS");
await simpleStorage.setNumber(42);
const storedValue = await simpleStorage.getNumber();
console.log(`Stored Number: ${storedValue}`);
```

## 📌 To-Do (Next Steps)
- [ ] Add a **React.js Frontend** to interact with the contract.
- [ ] Deploy the contract to an **Ethereum Testnet** (e.g., Sepolia, Goerli).
- [ ] Write test cases for contract verification.

## 📜 License
This project is licensed under the **MIT License**.


