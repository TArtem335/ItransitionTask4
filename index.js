const readline = require("readline");
const oTexts = require("./texts.js");
const gameResult = require("./gameResult.js");
const error = require("./error.js");

main();

async function main() {
	const aGameOptions = process.argv.slice(2);
	if (error.printErrorMessage(error.verifyGameOptions(aGameOptions))) return 1;

	let sUserMenuChoise = "";
	while (sUserMenuChoise !== "0") {
		let iComputerChoiseIndex = getRandomIntInclusive(0, aGameOptions.length - 1);
		let sComputerChoice = aGameOptions[iComputerChoiseIndex];
		console.log(sComputerChoice); //TODO: Hash

		printGameMenu(aGameOptions);

		sUserMenuChoise = await getUserGameChoise();
		if (sUserMenuChoise === "0") return 0;
		if (sUserMenuChoise !== "") console.clear();
		let sUserGameChoice = aGameOptions[sUserMenuChoise - 1]
		console.log(oTexts.MessageYourGameOption + oTexts.TextColon, sUserGameChoice);
		console.log(oTexts.MessageComputerGameOption + oTexts.TextColon, sComputerChoice);

		let sGameResult = gameResult.getGameResult(sUserGameChoice, sComputerChoice, aGameOptions);
		console.log(oTexts.MessageGameResult + oTexts.TextColon, sGameResult);
	}
}

function printGameMenu(aGameOptions) {
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