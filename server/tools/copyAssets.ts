import * as shell from "shelljs";
import fs from "fs";

shell.cp( "-R", "src/routers", "dist/" );
shell.cp( "-R", "src/models", "dist/" );