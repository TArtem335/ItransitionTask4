const readline = require("readline");
const oTexts = require("./texts.js");
const oGameResult = require("./gameResult.js");
const oError = require("./error.js");
const oHelp = require("./help.js");
const FairPlay = require("./fairPlay.js"); 

main();

async function main() {
	const aGameOptions = process.argv.slice(2);
	if (oError.printErrorMessage(oError.verifyGameOptions(aGameOptions))) return 1;
	let sUserMenuChoise = "";
	while (sUserMenuChoise !== "0") {
		printGameMenu(aGameOptions);
		let iComputerChoiseIndex = getRandomIntInclusive(0, aGameOptions.length - 1);
		let sComputerChoice = aGameOptions[iComputerChoiseIndex];
		let oFairPlay = new FairPlay(sComputerChoice);
		console.log(oTexts.MessageComputerChoiseHMAC + oTexts.TextColon,
			oFairPlay.generateComputerChoiseKeyHMAC()
		);
		do {
			// if (sUserMenuChoise !== "") console.log(oTexts.MessageErrorIncorrectUserInput);
			sUserMenuChoise = await getUserGameChoise();
			if (sUserMenuChoise === "?") {
				oHelp.printHelpTable(aGameOptions);
				sUserMenuChoise = "";
			}
		} while (!(sUserMenuChoise >= 0 && sUserMenuChoise <= aGameOptions.length || sUserMenuChoise === "?") || sUserMenuChoise === "")
		if (sUserMenuChoise === "0") return 0;
		// if (sUserMenuChoise !== "") console.clear();
		let sUserGameChoice = aGameOptions[sUserMenuChoise - 1];
		console.log(oTexts.MessageYourGameOption + oTexts.TextColon, sUserGameChoice);
		console.log(oTexts.MessageComputerGameOption + oTexts.TextColon, sComputerChoice);
		let sGameResult = oGameResult.getGameResultMessage(sUserGameChoice, sComputerChoice, aGameOptions);
		console.log(oTexts.MessageGameResult + oTexts.TextColon, sGameResult);
		console.log(oTexts.MessageComputerChoiseHMACKey + oTexts.TextColon, oFairPlay.sComputerChoiceKey);
	}
}

function printGameMenu(aGameOptions) {
	console.log(oTexts.GamesSeparator);
	console.log(oTexts.MessageGameOptions + oTexts.TextColon);
	aGameOptions.forEach((sOption, iIndex) => {
		console.log(iIndex + 1 + ". " + sOption);
	});
	console.log("?.", oTexts.MessageHelp);
	console.log("0.", oTexts.MessageExit);
}

function getUserGameChoise() {
	const oReadline = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	let sUserChoise = new Promise(fnResolve => {
		oReadline.question(oTexts.MessageChooseOption + oTexts.TextColon + " ", sAnswer => {
			oReadline.close();
			fnResolve(sAnswer);
		});
	});
	return sUserChoise;
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}