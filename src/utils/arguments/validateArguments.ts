import { ArgumentError } from 'error/ArgumentError';
import { AppArguments } from 'types/AppArguments';
import { validatePath } from './validatePath';

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

    if (!validatePath(imagePath)) {
        throw new ArgumentError(`Invalid imagePath: ${imagePath}`);
    }

    if (validatePath(pathMessage ?? '') || directMessage) return;
    throw new ArgumentError(
        'Neither message argument (path or direct) provided',
    );
};
