import { AppArguments, ArgumentName } from 'types/AppArguments';

const ARGUMENT_PREFIX = '-';

export const getArguments = () => {
    const appArguments = {} as AppArguments;

    process.argv.forEach(iterationArgument =>
        updateAppArguments(appArguments, iterationArgument),
    );

    return appArguments;
};

const updateAppArguments = (
    appArguments: AppArguments,
    iterationArgument: string,
) => {
    const prefixLastPosition = iterationArgument.lastIndexOf(ARGUMENT_PREFIX);
    if (prefixLastPosition === -1) return;

    const [argumentName, argumentValue] = iterationArgument
        .slice(prefixLastPosition + 1)
        .split('=');

    const parsedName = argumentName as ArgumentName;
    const parsedValue = (parsedName === 'help' ? true : argumentValue) as never;

    appArguments[parsedName] = parsedValue;
};
