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
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_eyeColor,_shirtType,_bling,_height,_weight) {
const NFT = {
"name":_name,
"eyeColor":_eyeColor,
"shirtType":_shirtType,
"bling":_bling,
"height":_height,
"weight":_weight
}
NFTs.push(NFT);
console.log("Name  " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0;i<NFTs.length;i++){
    console.log("\nid: \t\t"+(i+1));
    console.log("name: \t\t" +NFTs[i].name);
    console.log("eyeColor: \t" +NFTs[i].eyeColor);
    console.log("shirtType: \t" +NFTs[i].shirtType);
    console.log("bling: \t\t" +NFTs[i].bling);
    console.log("height: \t" +NFTs[i].height);
    console.log("weight: \t" +NFTs[i].weight);
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log(NFTs.length);
}

// call your functions below this line
mintNFT("tejas","green","jacket","platinum Chain","10","90");
mintNFT("lovekaran","black","jacket","bronze Chain","30","62");
mintNFT("priyanshu","yellow","Jacket","silver Chain","29","99");
mintNFT("Rahul","Black","jacket","gold Chain","17","73");
mintNFT("raman","brown","Hoodie","platinum Chain","30","80");
listNFTs();
getTotalSupply();
