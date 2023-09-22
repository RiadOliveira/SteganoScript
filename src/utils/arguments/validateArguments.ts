import { ArgumentError } from 'error/ArgumentError';
import { AppArguments } from 'types/AppArguments';
import { validatePath } from './validatePath';

export const validateArguments = ({
    help,
    mode,
    imagePath,
    messagePath,
    directMessage,
}: AppArguments) => {
    if (help) return;

    const isEncoding = mode === 'encoding';
    const isDecoding = mode === 'decoding';
    if (!isEncoding && !isDecoding) {
        throw new ArgumentError(`Invalid mode: ${mode}`);
    }

    if (!validatePath(imagePath)) {
        throw new ArgumentError(`Invalid imagePath: ${imagePath}`);
    }

    if (validatePath(messagePath ?? '') || directMessage) return;
    throw new ArgumentError(
        'Neither message argument (path or direct) provided',
    );
};
