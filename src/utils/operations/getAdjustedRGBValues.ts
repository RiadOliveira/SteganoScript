import { RGB_WEIGHTS } from 'constants/rgbWeights';
import { getCharCodeFromRGB } from './getCharCodeFromRGB';

const RGB_ADJUST_LIMIT = [4, 5, 5];

const LIMIT_TAGS = {
    LOWER_THAN_LIMIT: -1,
    INSIDE_LIMIT: 0,
    HIGHER_THAN_LIMIT: 1,
} as const;

export const getAdjustedRGBValues = (
    rgbValues: number[],
    targetCharCode: number,
): number[] => {
    const originalCharCode = getCharCodeFromRGB(rgbValues);
    const charCodesDifference = targetCharCode - originalCharCode;
    if (charCodesDifference == 0) return rgbValues;

    const adjustedRGBValues = generateAdjustedRGBValues(
        rgbValues,
        charCodesDifference,
    );
    const adjustedValuesTag = getLimitTagForRGBValues(adjustedRGBValues);
    if (adjustedValuesTag === LIMIT_TAGS.INSIDE_LIMIT) return adjustedRGBValues;

    const adjustedDifference = getAdjustedDifference(
        adjustedValuesTag,
        charCodesDifference,
    );
    return generateAdjustedRGBValues(rgbValues, adjustedDifference, false);
};

const generateAdjustedRGBValues = (
    originalRGBValues: number[],
    charCodesDifference: number,
    considerAdjustLimit = true,
) => {
    const adjustedRGBValues = [...originalRGBValues];
    let parsedCharCodesDifference = charCodesDifference;

    for (
        let ind = adjustedRGBValues.length - 1;
        parsedCharCodesDifference != 0 && ind >= 0;
        ind--
    ) {
        const adjustValue = getAdjustValueForRGBInd(
            ind,
            parsedCharCodesDifference,
            considerAdjustLimit,
        );

        parsedCharCodesDifference -= adjustValue * RGB_WEIGHTS[ind];
        adjustedRGBValues[ind] += adjustValue;
    }

    return adjustedRGBValues;
};

const getAdjustValueForRGBInd = (
    rgbInd: number,
    charCodesDifference: number,
    considerAdjustLimit: boolean,
) => {
    const iterationWeight = RGB_WEIGHTS[rgbInd];
    const absoluteDifference = Math.abs(charCodesDifference);

    let adjustValue = Math.floor(absoluteDifference / iterationWeight);
    if (considerAdjustLimit) {
        adjustValue = Math.min(adjustValue, RGB_ADJUST_LIMIT[rgbInd]);
    }

    const signalMultiplier = charCodesDifference >= 0 ? 1 : -1;
    return signalMultiplier * adjustValue;
};

const getLimitTagForRGBValues = (rgbValues: number[]) => {
    let limitTag: number = LIMIT_TAGS.INSIDE_LIMIT;

    for (
        let ind = 0;
        limitTag === LIMIT_TAGS.INSIDE_LIMIT && ind < rgbValues.length;
        ind++
    ) {
        limitTag = getLimitTagBasedOnValue(rgbValues[ind]);
    }

    return limitTag;
};

const getLimitTagBasedOnValue = (value: number) => {
    switch (true) {
        case value < 0:
            return LIMIT_TAGS.LOWER_THAN_LIMIT;
        case value > 255:
            return LIMIT_TAGS.HIGHER_THAN_LIMIT;
        default:
            return LIMIT_TAGS.INSIDE_LIMIT;
    }
};

const getAdjustedDifference = (
    adjustedValuesTag: number,
    originalCharCodesDifference: number,
) => {
    const oppositeTag = -adjustedValuesTag;
    return oppositeTag * (256 + oppositeTag * originalCharCodesDifference);
};
