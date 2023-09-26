import { Canvas } from 'canvas';
import { writeFileAsync } from './asyncFileOperations';
import { AppError } from 'error/AppError';

export const createImageFileFromCanvas = async (
    canvas: Canvas,
    filePath: string,
) => {
    try {
        const buffer = canvas.toBuffer('image/png');
        await writeFileAsync(filePath, buffer);
    } catch (error) {
        throw new AppError('Error generating image file');
    }
};
