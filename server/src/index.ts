import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app   = express();
const PORT  = process.env.PORT || 3000;

app.use(bodyParser.json())

fs.readdirSync("./routers")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		const { router } = require(`./routers/${file}`);

		app.use("/mail", router);
	});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
