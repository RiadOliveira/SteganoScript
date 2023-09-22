import { AppArguments } from 'types/AppArguments';
import { showHelpMessage } from './showHelpMessage';
import { readImageToCanvasData } from './readImageToCanvasData';
import { getParsedArgumentMessage } from './getParsedArgumentMessage';
import { encodeMessageInImage } from 'encoding/encodeMessageInImage';
import { decodeMessageFromImage } from 'decoding/decodeMessageFromImage';

export const getHandleFunctionBasedOnArguments = async ({
    help,
    mode,
    imagePath,
    messagePath,
    directMessage,
}: AppArguments) => {
    if (help) return showHelpMessage;

    const canvasData = await readImageToCanvasData(imagePath);
    const message = await getParsedArgumentMessage(messagePath, directMessage);

    const operationFunction =
        mode === 'encoding' ? encodeMessageInImage : decodeMessageFromImage;

    return () => operationFunction({ canvasData, message });
};
