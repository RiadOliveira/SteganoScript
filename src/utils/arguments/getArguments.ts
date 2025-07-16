import { AppArguments } from 'types/AppArguments';
import yargs from 'yargs';

export const getArguments = () =>
    yargs
        .scriptName("SteganoScript")
        .usage('$0')
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
                'Specify the path to a text file containing the message to hide. (Required for encoding mode if directMessage is not provided.)',
            type: 'string',
        })
        .option('directMessage', {
            alias: 'd',
            describe:
                'Provide the message directly as a command-line argument. (Required for encoding mode if pathMessage is not provided.)',
            type: 'string',
        })
        .option('outputFileName', {
            alias: 'o',
            describe:
                'Specify the output file name (excluding extension) where the result will be saved. For encoding, this is the name of the image with the hidden message. For decoding, this is the name of the extracted text message file.',
            type: 'string',
            default: 'outputFile',
        })
        .help()
        .alias('help', 'h')
        .version()
        .alias('version', 'v').argv as AppArguments;
