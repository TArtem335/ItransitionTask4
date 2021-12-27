const oTexts = require("./texts.js")

class GameResult {
    aGameResults = [
        oTexts.Draw,
        oTexts.Lose,
        oTexts.Win
    ];

    aGameResultMessages = [
        oTexts.MessageDraw,
        oTexts.MessageLose,
        oTexts.MessageWin
    ];

    getGameResultIndex(sUserGameChoice, sComputerChoice, aGameOptions) {
        let iUserChoiseIndex = aGameOptions.indexOf(sUserGameChoice),
            iComputerChoiseIndex = aGameOptions.indexOf(sComputerChoice),
            iIndexesDifference = iComputerChoiseIndex - iUserChoiseIndex;
        if (iIndexesDifference < 0) {
            iIndexesDifference += aGameOptions.length;
        }
        while (iIndexesDifference > 2) {
            iIndexesDifference -= 2;
        }
        return iIndexesDifference;
    }

    getGameResult(sUserGameChoice, sComputerChoice, aGameOptions) {
        return this.aGameResults[this.getGameResultIndex(sUserGameChoice, sComputerChoice, aGameOptions)];
    }

    getGameResultMessage(sUserGameChoice, sComputerChoice, aGameOptions) {
        return this.aGameResultMessages[this.getGameResultIndex(sUserGameChoice, sComputerChoice, aGameOptions)];
    }
}

module.exports = new GameResult();