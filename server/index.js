const express 	  = require("express");
const bodyParser  = require("body-parser");
const fs 					= require("fs");

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
