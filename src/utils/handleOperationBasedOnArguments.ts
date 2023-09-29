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

    if (mode === 'decoding') {
        await decodeMessageFromImage({ canvasData, outputFileName });
        return;
    }

    const message = await getParsedArgumentMessage(pathMessage, directMessage);
    await encodeMessageInImage({ canvasData, message, outputFileName });
};
