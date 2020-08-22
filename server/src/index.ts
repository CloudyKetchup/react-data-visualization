import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import cors from "cors"

const app   = express();
const PORT  = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors())

fs.readdirSync("./routers")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		const { router, path } = require(`./routers/${file}`);

		app.use(path, router);
	});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
