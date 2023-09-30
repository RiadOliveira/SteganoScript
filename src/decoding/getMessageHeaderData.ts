import { HEADER_ENDING_CHAR } from 'constants/headerEndingChar';
import { MessageHeaderData } from 'types/MessageHeaderData';
import {
    getCharCodeFromPixel,
    getNextPixelForOperation,
} from 'utils/operations';

export const getMessageHeaderData = (
    imageData: Uint8ClampedArray,
    initialPixelInd: number,
): MessageHeaderData => {
    const lengthBuffer: string[] = [];

    let currentPixelInd = initialPixelInd;
    let iterationChar = String.fromCharCode(
        getCharCodeFromPixel(imageData, currentPixelInd),
    );

    while (lengthBuffer[lengthBuffer.length - 1] != HEADER_ENDING_CHAR) {
        lengthBuffer.push(iterationChar);

        currentPixelInd = getNextPixelForOperation({
            initialPixelInd,
            currentPixelInd,
            operationInd: lengthBuffer.length - 1,
            imageDataLength: imageData.length,
        });
        iterationChar = String.fromCharCode(
            getCharCodeFromPixel(imageData, currentPixelInd),
        );
    }

    return {
        messageLength: Number(lengthBuffer.join('')),
        nextOperationInd: lengthBuffer.length,
        nextPixelInd: currentPixelInd,
    };
};
