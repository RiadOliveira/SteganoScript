import {
    MESSAGE_ENDING_CHAR,
    QUANTITY_OF_ENDING_CHAR_IN_MESSAGE,
} from 'constants/messageEndingChar';

export const getParsedMessageForEncoding = (originalMessage: string) =>
    originalMessage +
    Array.from({ length: QUANTITY_OF_ENDING_CHAR_IN_MESSAGE })
        .map(() => MESSAGE_ENDING_CHAR)
        .join('');
