/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTS=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name_,eye_colour,shirt_type,bling_) {
   const NFT={"name":name_,
   "eyecolour":eye_colour,
   "shirttype":shirt_type,
   "bling":bling_
   }
   NFTS.push(NFT)
   console.log("minted ",name_)
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(i=0;i<NFTS.length;i++)
   {
      console.log("\nid ",i+1)
      console.log("name is ",NFTS[i].name)
      console.log("shirttype is ",NFTS[i].shirttype)
      console.log("eyecolour is ",NFTS[i].eyecolour)
      console.log("bling is ",NFTS[i].bling)
      console.log("\n")

   }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\ntotal NFTS are ",NFTS.length)
}
// call your functions below this line
mintNFT("harris","green","hoodie","gold chain")
mintNFT("sam","blue","polo shirt","silver chain")
mintNFT("tom","green","hoodie","gold chain")
mintNFT("tim","blue","polo shirt","silver chain")
mintNFT("max","yellow","hoodie","gold chain")
mintNFT("zach","blue","polo shirt","silver chain")
listNFTs()
getTotalSupply()
