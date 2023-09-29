import { AppError } from 'error/AppError';
import { writeFileAsync } from './asyncFileOperations';
import { OUTPUT_PATH } from 'constants/outputPath';

export const createTextFileFromString = async (
    textContent: string,
    fileName: string,
) => {
    try {
        await writeFileAsync(`${OUTPUT_PATH}${fileName}.txt`, textContent);
    } catch (error) {
        throw new AppError('Error generating text file.');
    }
};
