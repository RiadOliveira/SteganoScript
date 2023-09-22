export const showError = (error: unknown) => {
    const instanceOfError = error instanceof Error;
    const message = instanceOfError
        ? `[${error.name}] ${error.message}`
        : '[InternalError] Unexpected error!';

    console.error(`${message}\n`);
};
