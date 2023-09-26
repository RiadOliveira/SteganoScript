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
                'Specify the path to the image file. For encoding, this is where the message will be hidden. For decoding, this is where the hidden message will be revealed.',
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
        .option('outputFolder', {
            alias: 'o',
            describe:
                'Specify the output folder where the result will be saved. For encoding, this is where the image with hidden message will be saved. For decoding, this is where the extracted text message will be saved.',
            type: 'string',
            default: './result/',
        })
        .help()
        .alias('help', 'h')
        .version()
        .alias('version', 'v').argv as AppArguments;
