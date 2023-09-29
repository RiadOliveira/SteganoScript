import { MESSAGE_ENDING_CHAR } from 'constants/messageEndingChar';

export const messageFullyDecoded = (message: string[]) => {
    const { length } = message;
    if (length < 4) return false;

    let ind = length - 1;
    for (; length - ind < 5 && message[ind] === MESSAGE_ENDING_CHAR; ind--);

    return length - ind === 5;
};
