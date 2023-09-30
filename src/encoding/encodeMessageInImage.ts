import { OperationData } from 'types/OperationData';
import { getParsedMessageForEncoding } from './getParsedMessageForEncoding';
import { createImageFileFromCanvas } from 'utils';
import {
    getAdjustedRGBValues,
    getInitialPixelForOperation,
    getNextPixelForOperation,
    getRGBValuesFromPixelIndex,
} from 'utils/operations';
import { updatePixelsUsingRGBValues } from './updatePixelsUsingRGBValues';

export const encodeMessageInImage = async ({
    canvasData,
    message,
    outputFileName,
}: OperationData) => {
    const { canvas, context, imageData } = canvasData;
    const { data } = imageData;

    const parsedMessage = getParsedMessageForEncoding(message);
    const initialPixelInd = getInitialPixelForOperation(canvasData);

    let currentPixelInd = initialPixelInd;
    for (let messagInd = 0; messagInd < parsedMessage.length; messagInd++) {
        const rgbValuesFromInd = getRGBValuesFromPixelIndex(
            data,
            currentPixelInd,
        );

        const adjustedRGBValues = getAdjustedRGBValues(
            rgbValuesFromInd,
            parsedMessage.charCodeAt(messagInd),
        );
        updatePixelsUsingRGBValues(data, currentPixelInd, adjustedRGBValues);

        currentPixelInd = getNextPixelForOperation({
            initialPixelInd,
            currentPixelInd,
            operationInd: messagInd,
            imageDataLength: data.length,
        });
    }

    context.putImageData(imageData, 0, 0);
    await createImageFileFromCanvas(canvas, outputFileName);
};
