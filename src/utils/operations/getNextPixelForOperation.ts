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
    const currentLowerThanOriginal = currentPixelInd < initialPixelInd;
    const difference = initialPixelInd - currentPixelInd;

    if (currentLowerThanOriginal && difference === COMPARABLE_DIFFERENCE) {
        throw new AppError('Unable to get next pixel, length limit reached.');
    }

    const currentParity = currentPixelInd % 2;
    const initialParity = initialPixelInd % 2;

    const hasDifferentParity = currentParity != initialParity;
    const jumpInd =
        currentLowerThanOriginal || hasDifferentParity
            ? 0
            : operationInd % PIXEL_JUMPS.length;

    const updatedInd = currentPixelInd + PIXEL_JUMPS[jumpInd];
    return updatedInd < imageDataLength ? updatedInd : Number(!currentParity);
};
