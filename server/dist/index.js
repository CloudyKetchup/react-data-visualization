"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const PORT = process.env.PORT || 8080;
app.use(body_parser_1.default.json());
app.use(cors_1.default());
fs_1.default.readdirSync("./routers")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
    const { router, path } = require(`./routers/${file}`);
    app.use(path, router);
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
//# sourceMappingURL=index.js.map