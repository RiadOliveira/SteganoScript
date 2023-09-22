import { AppError } from 'error/AppError';
import { readFileAsync } from './readFileAsync';

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
