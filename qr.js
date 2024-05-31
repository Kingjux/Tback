const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Cod3Uchiha_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function MANJIRO_SANO_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Cod3Uchiha_Tech = Cod3Uchiha_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Cod3Uchiha_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Cod3Uchiha_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Cod3Uchiha_Tech.sendMessage(Qr_Code_By_Cod3Uchiha_Tech.user.id, { text: 'MANJIRO-SANO-MD;;;' + b64data });
	
				   let MANJIRO_SANO_MD_TEXT = `
*_Qr Code By Cod3Uchiha Tech_*
*_Made With 🤍_*
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Cod3Uchiha_Tech.sendMessage(Qr_Code_By_Cod3Uchiha_Tech.user.id,{text:MANJIRO_SANO_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Cod3Uchiha_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SIGMA_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await MANJIRO_SANO_MD_QR_CODE()
});
module.exports = router
