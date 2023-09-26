const FILE_PATH_REGEX =
    /^(\/?\.?\/?[a-zA-Z0-9-_]+)+(\/[a-zA-Z0-9-_]+\.[a-zA-Z0-9]+)$/;

export const validateFilePath = (path: string) => FILE_PATH_REGEX.test(path);
