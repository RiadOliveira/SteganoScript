import { OperationData } from 'types/OperationData';
import { messageFullyDecoded } from './messageFullyDecoded';
import {
    getCharCodeFromPixel,
    getInitialPixelForOperation,
} from 'utils/operations';
import { getNextPixelForOperation } from 'utils/operations/getNextPixelForOperation';
import { createTextFileFromString } from 'utils/createTextFileFromString';
import { getMessageHeaderData } from './getMessageHeaderData';

export const decodeMessageFromImage = async ({
    canvasData,
    outputFileName,
}: Omit<OperationData, 'message'>) => {
    const {
        imageData: { data },
    } = canvasData;

    const initialPixelInd = getInitialPixelForOperation(canvasData);
    const { messageLength, nextPixelInd, nextOperationInd } =
        getMessageHeaderData(data, initialPixelInd);

    const messageBuffer: string[] = [];
    let currentPixelInd = nextPixelInd;

    while (!messageFullyDecoded(messageBuffer, messageLength)) {
        const iterationChar = String.fromCharCode(
            getCharCodeFromPixel(data, currentPixelInd),
        );
        messageBuffer.push(iterationChar);

        currentPixelInd = getNextPixelForOperation({
            initialPixelInd,
            currentPixelInd,
            operationInd: nextOperationInd + messageBuffer.length - 1,
            imageDataLength: data.length,
        });
    }

    await createTextFileFromString(messageBuffer.join(''), outputFileName);
};
