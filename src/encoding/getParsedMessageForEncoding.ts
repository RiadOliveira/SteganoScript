import { HEADER_ENDING_CHAR } from 'constants/headerEndingChar';

export const getParsedMessageForEncoding = (originalMessage: string) =>
    originalMessage.length + HEADER_ENDING_CHAR + originalMessage;
