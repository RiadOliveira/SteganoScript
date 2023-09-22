const HELP_MESSAGE = `
Usage: stegano-script --mode=<mode> --imagePath=<imagePath> [--messagePath=<messagePath> | --directMessage=<directMessage>] [--help]

Description:
  Hide or extract a message from an image using steganography.

Options:
  --mode=<mode>           Choose the steganography mode. Available options are encoding or decoding.
  --imagePath=<imagePath> Specify the path to the image file where the message will be hidden.
  --messagePath=<messagePath> Specify the path to a text file containing the message to hide.
  --directMessage=<directMessage> Provide the message directly as a command-line argument.
  --help                  Display this help message.

Note:
  - You must provide either a text file using '--messagePath' or a direct message using '--directMessage'.
  - The 'encoding' mode hides the message in the image, while the 'decoding' mode extracts a hidden message.

Example:
  stegano-script --mode=encoding --imagePath=image.png --messagePath=message.txt
`;

export const showHelpMessage = async () => console.log(HELP_MESSAGE);
