const PATH_REGEX =
    /^(\/?\.?\/?[a-zA-Z0-9-_]+)+(\/[a-zA-Z0-9-_]+\.[a-zA-Z0-9]+)$/;

export const validatePath = (path: string) => PATH_REGEX.test(path);
