import { AppArguments } from 'types/AppArguments';
import { readImageToCanvasData } from './readImageToCanvasData';
import { getParsedArgumentMessage } from './getParsedArgumentMessage';
import { encodeMessageInImage } from 'encoding/encodeMessageInImage';
import { decodeMessageFromImage } from 'decoding/decodeMessageFromImage';

export const handleOperationBasedOnArguments = async ({
    mode,
    imagePath,
    pathMessage,
    directMessage,
    outputFileName,
}: AppArguments) => {
    const canvasData = await readImageToCanvasData(imagePath);
    const message = await getParsedArgumentMessage(pathMessage, directMessage);

    const operationFunction =
        mode === 'encoding' ? encodeMessageInImage : decodeMessageFromImage;

    return operationFunction({ canvasData, message, outputFileName });
};
