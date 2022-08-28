const fs = require('fs');
const hexSpeak = require('./hexspeak.js');
const everyEnglishWord = require('wordlist-english');
var localStorage = JSON.parse(fs.readFileSync('storage.json'));

function generateHex(){
    let hex = '0x';

    // there are (15^8)-1 = 2562890624 possible 8 digit hex combinations 
    if(localStorage.entries >= 2562890624){
        // every possible combination has been generated
        // reset storage and continue
        localStorage = {entries : 0};
    }
    

	for (let i = 0; i < 8; i++) {
		hex += Math.floor(Math.random() * 15).toString(16);
	}

    if(localStorage[hex] === undefined){
        // hex hasn't been generated
        // write to storage and repeat if necessary
        let isAllowed = isHexAllowed(hex);
        localStorage[hex] = isAllowed;
        localStorage.entries += 1;

        if(isAllowed){
            return hex;
        } else{
            return generateHex();
        }
    } else{
        // hex has already been generared; run again
        return generateHex();
    }
}

function isHexAllowed(hex){

    // handle common 'hexspeak' cases
    if(hexSpeak[hex]) return false;

    // don't use any english words that may be generated
    if(everyEnglishWord[hex]) return false;


    let arr = hex.split('');
    let set = new Set(arr.slice(2,10));

    // handle 8 of the same characters
    if(set.size === 1) return false;2

    return true;
}

function main(){
     // generate random 8 digit hex
    let hex = generateHex();
    console.log(hex);
     // update storage
    fs.writeFileSync('storage.json', JSON.stringify(localStorage), 'utf-8');

}


main();