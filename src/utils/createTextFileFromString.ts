import { AppError } from 'error/AppError';
import { writeFileAsync } from './asyncFileOperations';

export const createTextFileFromString = async (
    textContent: string,
    filePath: string,
) => {
    try {
        await writeFileAsync(filePath, textContent);
    } catch (error) {
        throw new AppError('Error generating text file');
    }
};
