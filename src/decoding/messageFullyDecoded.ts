import {
    MESSAGE_ENDING_CHAR,
    QUANTITY_OF_ENDING_CHAR_IN_MESSAGE,
} from 'constants/messageEndingChar';

export const messageFullyDecoded = (message: string[]) => {
    const { length } = message;
    if (length < QUANTITY_OF_ENDING_CHAR_IN_MESSAGE) return false;

    let ind = length - 1;
    for (
        ;
        length - ind < QUANTITY_OF_ENDING_CHAR_IN_MESSAGE + 1 &&
        message[ind] === MESSAGE_ENDING_CHAR;
        ind--
    );

    return length - ind === QUANTITY_OF_ENDING_CHAR_IN_MESSAGE + 1;
};
