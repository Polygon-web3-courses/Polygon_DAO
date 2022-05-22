import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x7863B1adc4A006bD397620A4E54DC92a525367f9");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Code for good",
        description: "This NFT will give you access to CodersDAO!",
        image: readFileSync("scripts/assets/membershipNFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();