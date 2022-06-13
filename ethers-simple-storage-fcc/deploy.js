const ethers = require("ethers");
const fs = require("fs");

// http://127.0.0.1:7545

async function main() {
  console.log("hi");

  let variable = 5;

  console.log(variable);

  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );

  const wallet = new ethers.Wallet(
    "f8401ce4c7a9ef543d9e046c0de9e0f4c31353825477d034e7a687d3763b47ff",
    provider
  );

  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  const contract = await contractFactory.deploy();
  console.log("Here is the transaction:");
  console.log(contract.deployTransaction);
  console.log("Here is the receipt:");
  console.log(transactionReceipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
