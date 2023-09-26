import fs from 'fs';
import { promisify } from 'util';

export const readFileAsync = promisify(fs.readFile);
export const writeFileAsync = promisify(fs.writeFile);
