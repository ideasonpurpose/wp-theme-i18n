import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import gettextParser from "gettext-parser";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "languages");

for (const file of readdirSync(dir)) {
	if (!file.endsWith(".po")) continue;
	const po = join(dir, file);
	const mo = join(dir, file.replace(/\.po$/, ".mo"));
	const parsed = gettextParser.po.parse(readFileSync(po), { validation: true });
	writeFileSync(mo, gettextParser.mo.compile(parsed));
}
