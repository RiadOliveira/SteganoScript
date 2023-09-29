import { AppError } from 'error/AppError';
import { readFileAsync } from 'utils';

export const getParsedArgumentMessage = async (
    pathMessage?: string,
    directMessage?: string,
) => {
    if (directMessage) return directMessage;

    try {
        return await readFileAsync(pathMessage!, 'utf8');
    } catch (error) {
        throw new AppError('Error while reading message file.');
    }
};
