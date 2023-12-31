import { QUANTITY_OF_RGB_VALUES } from 'constants/quantityOfRGBValues';
import { RGB_WEIGHTS } from 'constants/rgbWeights';

export const getCharCodeFromRGB = (rgbValues: number[]) => {
    const rgbWeightedSum = RGB_WEIGHTS.reduce(
        (previous, current, rgbInd) => previous + rgbValues[rgbInd] * current,
        0,
    );

    return rgbWeightedSum % QUANTITY_OF_RGB_VALUES;
};
