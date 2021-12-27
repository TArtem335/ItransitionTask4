const secureRandom = require("secure-random");
const { SHA3 } = require('sha3');

class FairPlay {
    constructor(sComputerChoice) {
        this.sComputerChoice = sComputerChoice;
        this.sComputerChoiceKey = this.generateComputerChoiseKey();
    }
    generateComputerChoiseKey() {
        let sComputerChoiceKey = secureRandom(16, {type: 'Buffer'}).join("").toUpperCase();
        return sComputerChoiceKey;
    }
    generateComputerChoiseKeyHMAC() {
        const sHash = new SHA3(256);
        sHash.update(this.sComputerChoiceKey + this.sComputerChoice);
        let sHashResult = sHash.digest('hex');
        return sHashResult;
    }
}

module.exports = FairPlay;