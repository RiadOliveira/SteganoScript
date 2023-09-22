import { AppArguments } from 'types/AppArguments';
import yargs from 'yargs';

export const getArguments = () =>
    yargs
        .option('mode', {
            alias: 'm',
            describe:
                'Choose the steganography mode. Available options are encoding or decoding.',
            demandOption: true,
            type: 'string',
        })
        .option('imagePath', {
            alias: 'i',
            describe:
                'Specify the path to the image file where the message will be hidden.',
            demandOption: true,
            type: 'string',
        })
        .option('pathMessage', {
            alias: 'p',
            describe:
                'Specify the path to a text file containing the message to hide.',
            type: 'string',
        })
        .option('directMessage', {
            alias: 'd',
            describe:
                'Provide the message directly as a command-line argument.',
            type: 'string',
        })
        .help()
        .alias('help', 'h')
        .version()
        .alias('version', 'v').argv as AppArguments;
