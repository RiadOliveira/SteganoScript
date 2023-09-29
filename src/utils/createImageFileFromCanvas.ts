import { Canvas } from 'canvas';
import { writeFileAsync } from './asyncFileOperations';
import { AppError } from 'error/AppError';
import { OUTPUT_PATH } from 'constants/outputPath';

export const createImageFileFromCanvas = async (
    canvas: Canvas,
    fileName: string,
) => {
    try {
        const buffer = canvas.toBuffer('image/png');
        await writeFileAsync(`${OUTPUT_PATH}${fileName}.png`, buffer);
    } catch (error) {
        throw new AppError('Error generating image file.');
    }
};
