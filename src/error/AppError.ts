export class AppError extends Error {
    public readonly name = 'AppError';

    constructor(message: string) {
        super(message);
    }
}
