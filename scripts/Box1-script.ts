import { ethers } from "hardhat"
import { upgrades } from "hardhat"

async function main() {

  const Box1 = await ethers.getContractFactory("Box1")
  console.log("Box is upgrading...")
  await upgrades.upgradeProxy(
    '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0',
    Box1
    )
  console.log("Box is upgraded to Box1 successfully...")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})