import { AppError } from 'error/AppError';

interface GetNextPixelForOperationProps {
    initialInd: number;
    currentInd: number;
    operationInd: number;
    imageDataLength: number;
}

const PIXEL_SIZE = 4;
const COMPARABLE_DIFFERENCE = 2 * PIXEL_SIZE;
const PIXEL_JUMPS = [2, 4, 6, 8].map(value => value * PIXEL_SIZE);

export const getNextPixelForOperation = ({
    initialInd,
    currentInd,
    operationInd,
    imageDataLength,
}: GetNextPixelForOperationProps) => {
    if (currentInd >= initialInd) {
        const pixelJump = PIXEL_JUMPS[operationInd % PIXEL_JUMPS.length];
        const updatedInd = currentInd + pixelJump;

        if (updatedInd < imageDataLength) return updatedInd;
        return Number(!(currentInd % 2));
    }

    const difference = initialInd - currentInd;
    if (difference === COMPARABLE_DIFFERENCE) {
        throw new AppError('Unable to hide message, length limit reached');
    }

    return currentInd + PIXEL_JUMPS[0];
};
