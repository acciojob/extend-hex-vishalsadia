const extendHex = (shortHex) => {
  // write your code here
	let i = shortHex.length-3 , isCapital=false;
	let Output="#";
	while (i<shortHex.length) {
		let asciiCode =shortHex[i].charCodeAt(0);
		if(asciiCode>=65&&asciiCode<=90){
			isCapital=true;
			
		}
		Output+=shortHex[i]+shortHex[i];
		
		i++;
		
		}
	return isCapital ? Output.toUpperCase() :Output;
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
