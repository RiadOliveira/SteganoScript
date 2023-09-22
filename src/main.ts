import { showError } from 'error/showError';
import { getHandleFunctionBasedOnArguments } from 'utils';
import { getArguments, validateArguments } from 'utils/arguments';

const main = async () => {
    const appArguments = getArguments();
    validateArguments(appArguments);

    const handleFunction = await getHandleFunctionBasedOnArguments(
        appArguments,
    );
    await handleFunction();
};

main().catch(showError);
