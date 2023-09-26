import { showError } from 'error/showError';
import { handleOperationBasedOnArguments } from 'utils';
import { getArguments, validateArguments } from 'utils/arguments';

const main = async () => {
    const appArguments = getArguments();
    validateArguments(appArguments);

    await handleOperationBasedOnArguments(appArguments);
};

main().catch(showError);
