const FILE_PATH_REGEX =
    /^(\/?\.?\/?[a-zA-Z0-9-_]+)+(\/[a-zA-Z0-9-_]+\.[a-zA-Z0-9]+)$/;

const FOLDER_PATH_REGEX = /^(\/?\.?\/?[a-zA-Z0-9-_]+)+\/?$/;

export const validateFilePath = (path: string) => FILE_PATH_REGEX.test(path);
export const validateFolderPath = (path: string) =>
    FOLDER_PATH_REGEX.test(path);
