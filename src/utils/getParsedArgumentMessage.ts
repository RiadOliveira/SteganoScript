import fs from 'fs';
import { promisify } from 'util';
import { AppError } from 'error/AppError';

const readFileAsync = promisify(fs.readFile);

export const getParsedArgumentMessage = async (
    messagePath?: string,
    directMessage?: string,
) => {
    if (directMessage) return directMessage;

    try {
        return await readFileAsync(messagePath!, 'utf8');
    } catch (error) {
        throw new AppError('Error while reading message file');
    }
};
