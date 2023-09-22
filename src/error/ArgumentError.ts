export class ArgumentError extends Error {
    public static readonly helpMessage =
        'Try typing -help or --help to understand better the arguments.';
    public readonly name = 'ArgumentError';

    constructor(message: string) {
        super(`${message}. ${ArgumentError.helpMessage}`);
    }
}
