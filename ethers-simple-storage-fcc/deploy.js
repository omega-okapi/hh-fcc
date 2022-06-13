const ethers = require("ethers");

// http://127.0.0.1:7545

function main() {
  console.log("hi");

  let variable = 5;

  console.log(variable);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
