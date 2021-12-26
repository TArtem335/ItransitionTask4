const oTexts = require("./texts.js")

class GameResult {
    aGameResults = [
        oTexts.MessageDraw,
        oTexts.MessageLose,
        oTexts.MessageWin
    ];

    getGameResult(sUserGameChoice, sComputerChoice, aGameOptions) {
        let iUserChoiseIndex = aGameOptions.indexOf(sUserGameChoice),
            iComputerChoiseIndex = aGameOptions.indexOf(sComputerChoice),
            iIndexesDifference = iComputerChoiseIndex - iUserChoiseIndex;
        if (iIndexesDifference < 0) {
            iIndexesDifference += aGameOptions.length;
        }
        while (iIndexesDifference > 2) {
            iIndexesDifference -= 2;
        }
        return this.aGameResults[iIndexesDifference];
    }
}

module.exports = new GameResult();