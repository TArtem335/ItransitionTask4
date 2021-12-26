const oTexts = require("./texts.js");

class Error {
    verifyGameOptions(aGameOptions) {
        if (aGameOptions.length < 3) {
            return "ErrorNotEnoughOptions"
        }
        if (aGameOptions.length % 2 === 0) {
            return "ErrorEvenNumberOfOptions";
        }
        if (aGameOptions.length !== [...new Set(aGameOptions)].length) {
            return "ErrorDublicateOptions"
        }
        return "NoError";
    }
    
    printErrorMessage(sError) {
        switch (sError) {
            case "ErrorNotEnoughOptions":
                console.log(oTexts.MessageErrorIncorrectOptions, oTexts.MessageErrorNotEnoughOptions, oTexts.MessageCorrectExample);
                return 1;
            case "ErrorEvenNumberOfOptions":
                console.log(oTexts.MessageErrorIncorrectOptions, oTexts.MessageErrorEvenNumberOfOptions, oTexts.MessageCorrectExample);
                return 1;
            case "ErrorDublicateOptions":
                console.log(oTexts.MessageErrorIncorrectOptions, oTexts.MessageErrorDublicateOptions, oTexts.MessageCorrectExample);
                return 1;
            case "NoError":
                return 0;
        }
    }
}

module.exports = new Error();