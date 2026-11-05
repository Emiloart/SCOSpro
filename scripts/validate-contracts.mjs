import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const schemaDirectory = new URL("../contracts/schemas/", import.meta.url);
const entries = await readdir(schemaDirectory);
const schemaFiles = entries.filter((entry) => entry.endsWith(".schema.json")).sort();

if (schemaFiles.length === 0) {
  throw new Error("No contract schemas found.");
}

const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);

const failures = [];

for (const filename of schemaFiles) {
  const source = await readFile(new URL(filename, schemaDirectory), "utf8");
  let schema;

  try {
    schema = JSON.parse(source);
  } catch (error) {
    failures.push(`${filename}: invalid JSON: ${error.message}`);
    continue;
  }

  try {
    ajv.compile(schema);
    process.stdout.write(`PASS ${filename}\n`);
  } catch (error) {
    failures.push(`${filename}: schema compilation failed: ${error.message}`);
  }
}

if (failures.length > 0) {
  process.stderr.write(`\nContract validation failed:\n- ${failures.join("\n- ")}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`\nValidated ${schemaFiles.length} contract schemas.\n`);
}
