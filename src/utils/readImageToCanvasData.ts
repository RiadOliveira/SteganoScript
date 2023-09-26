import { createCanvas, loadImage } from 'canvas';
import { AppError } from 'error/AppError';
import { CanvasData } from 'types/CanvasData';

export const readImageToCanvasData = async (
    imagePath: string,
): Promise<CanvasData> => {
    try {
        const image = await loadImage(imagePath);
        const { width, height } = image;

        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');

        context.drawImage(image, 0, 0, width, height);
        const imageData = context.getImageData(0, 0, width, height);

        return { canvas, context, imageData };
    } catch (error) {
        throw new AppError('Error while reading image file');
    }
};
