const cron = require("cron");
const https = require("https");

const backendUrl = "https://personal-portfolio-rpcw.onrender.com";

const job = new cron.CronJob("*/14 * * * *", () => {
	console.log("Restarting server");

	https
		.get(backendUrl, (res) => {
			if (res.statusCode === 200) {
				console.log("Server is running");
			} else {
				console.log("Server is not running");
			}
		})
		.on("error", (err) => {
			console.log("Error: ", err);
		});
});

module.exports = job;
