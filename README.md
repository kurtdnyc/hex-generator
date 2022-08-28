# hex-generator
Generate an 8 digit hexadecimal code such that: 
- Every time you run the program, it should emit one 8-digit hexadecimal code
- It should emit every possible code before repeating
- It should not print "odd-looking" codes such as 0xAAAAAAAA or 0x01234567 or any commonly used words, phrases, or hexspeak such as 0xDEADBEEF
- Codes should be emitted in apparently random order

# Usage
This project has 1 dependency: [wordlist-english](https://www.npmjs.com/package/wordlist-english)

`npm install`

`node index.js`
