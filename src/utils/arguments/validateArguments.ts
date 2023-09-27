import { ArgumentError } from 'error/ArgumentError';
import { AppArguments } from 'types/AppArguments';
import { validateFilePath } from './validateFilePath';

export const validateArguments = ({
    mode,
    imagePath,
    pathMessage,
    directMessage,
}: AppArguments) => {
    const isEncoding = mode === 'encoding';
    const isDecoding = mode === 'decoding';
    if (!isEncoding && !isDecoding) {
        throw new ArgumentError(`Invalid mode: ${mode}`);
    }

    if (!validateFilePath(imagePath)) {
        throw new ArgumentError(`Invalid imagePath: ${imagePath}`);
    }

    if (isDecoding) return;
    if (validateFilePath(pathMessage ?? '') || directMessage) return;

    throw new ArgumentError(
        'For encoding mode, either directMessage or pathMessage is required.',
    );
};
