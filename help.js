const oGameResult = require("./gameResult.js");
const oTexts = require("./texts.js");

class Help {
    printHelpTable(aGameOptions) {
        let sTableRow = oTexts.BlankSpace;
        aGameOptions.forEach(sGameOption => sTableRow += String(oTexts.BlankSpace + sGameOption).slice(-10));
        console.log(sTableRow);
        aGameOptions.forEach(sGameOption1 => {
            sTableRow = String(oTexts.BlankSpace + sGameOption1).slice(-10);
            aGameOptions.forEach(sGameOption2 => {
                sTableRow += String(oTexts.BlankSpace + oGameResult.getGameResult(sGameOption1, sGameOption2, aGameOptions)).slice(-10);
            })
            console.log(sTableRow);
        });
    }
}

module.exports = new Help();