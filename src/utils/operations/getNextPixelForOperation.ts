import { AppError } from 'error/AppError';

interface GetNextPixelForOperationProps {
    initialPixelInd: number;
    currentPixelInd: number;
    operationInd: number;
    imageDataLength: number;
}

const PIXEL_SIZE = 4;
const COMPARABLE_DIFFERENCE = 2 * PIXEL_SIZE;
const PIXEL_JUMPS = [2, 4, 6, 8].map(value => value * PIXEL_SIZE);

export const getNextPixelForOperation = ({
    initialPixelInd,
    currentPixelInd,
    operationInd,
    imageDataLength,
}: GetNextPixelForOperationProps) => {
    if (currentPixelInd >= initialPixelInd) {
        const pixelJump = PIXEL_JUMPS[operationInd % PIXEL_JUMPS.length];
        const updatedInd = currentPixelInd + pixelJump;

        if (updatedInd < imageDataLength) return updatedInd;
        return Number(!(currentPixelInd % 2));
    }

    const difference = initialPixelInd - currentPixelInd;
    if (difference === COMPARABLE_DIFFERENCE) {
        throw new AppError('Unable to get next pixel, length limit reached.');
    }

    return currentPixelInd + PIXEL_JUMPS[0];
};
