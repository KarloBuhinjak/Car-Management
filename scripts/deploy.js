async function main() {
  const CarRegistry = await ethers.getContractFactory("CarRegistry");

  // Start deployment, returning a promise that resolves to a contract object
  const CarRegistry_ = await CarRegistry.deploy();
  console.log("Contract address:", CarRegistry_.address);


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });