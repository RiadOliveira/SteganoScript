import { OperationData } from 'types/OperationData';
import { messageFullyDecoded } from './messageFullyDecoded';
import {
    getCharCodeFromPixel,
    getInitialPixelForOperation,
} from 'utils/operations';
import { getNextPixelForOperation } from 'utils/operations/getNextPixelForOperation';
import { createTextFileFromString } from 'utils/createTextFileFromString';

export const decodeMessageFromImage = async ({
    canvasData,
    outputFileName,
}: Omit<OperationData, 'message'>) => {
    const {
        imageData: { data },
    } = canvasData;

    const initialPixelInd = getInitialPixelForOperation(canvasData);
    const decodedMessage = [] as string[];

    let currentPixelInd = initialPixelInd;
    while (!messageFullyDecoded(decodedMessage)) {
        const iterationChar = String.fromCharCode(
            getCharCodeFromPixel(data, currentPixelInd),
        );
        decodedMessage.push(iterationChar);

        currentPixelInd = getNextPixelForOperation({
            initialPixelInd,
            currentPixelInd,
            operationInd: decodedMessage.length - 1,
            imageDataLength: data.length,
        });
    }

    await createTextFileFromString(decodedMessage.join(''), outputFileName);
};
