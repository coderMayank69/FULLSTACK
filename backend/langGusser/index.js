import { franc } from 'franc';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const langs = require("langs");
const input = process.argv[2];



const langCode = franc(input);
const language = langs.where("3", langCode);
console.log(language.name);