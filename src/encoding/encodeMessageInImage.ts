import { OperationData } from 'types/OperationData';
import { getCharCodeFromRGB } from 'utils/operations';
import { getRGBValuesDistribution } from 'utils/operations/getRGBValuesDistribution';

export const encodeMessageInImage = async ({
    canvasData,
    message,
}: OperationData) => {
    const distribuitedRGBValues = getRGBValuesDistribution([255,255,255],250)

    console.log(
        `readjusted RGB values: ${distribuitedRGBValues} | readjusted char code: ${getCharCodeFromRGB(
            distribuitedRGBValues,
        )}`,
    );
};
