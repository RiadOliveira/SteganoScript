import { getCharCodeFromRGB } from './getCharCodeFromRGB';

export const getRGBValuesDistribution = (
    originalRGBValues: number[],
    targetCharCodeValue: number,
): number[] => {
    const originalRGBValuesCharCode = getCharCodeFromRGB(originalRGBValues);
    console.log(
        `original RGB values: [${originalRGBValues}] | original char code: ${originalRGBValuesCharCode} | target char code: ${targetCharCodeValue}`,
    );

    const originalCharCodeDifference =
        targetCharCodeValue - originalRGBValuesCharCode;

    console.log(`difference: ${originalCharCodeDifference}`);

    const adjustedRGBValues = [...originalRGBValues];

    if (originalCharCodeDifference == 0) return originalRGBValues;

    (originalCharCodeDifference < 0
        ? adjustNegativeDifference
        : adjustPositiveDifference)(adjustedRGBValues, targetCharCodeValue);

    areRGBValuesValid(adjustedRGBValues);

    return adjustedRGBValues;
};

const adjustNegativeDifference = (
    adjustedRGBValues: number[],
    targetCharCodeValue: number,
) => {
    for (let i = 2; i >= 0; i--) {
        while (
            getCharCodeFromRGB(
                adjustedRGBValues.map((value, index) =>
                    index === i ? value - 1 : value,
                ),
            ) >= targetCharCodeValue
        ) {
            adjustedRGBValues[i]--;

            if (getCharCodeFromRGB(adjustedRGBValues) === targetCharCodeValue) {
                return adjustedRGBValues;
            }
        }
    }
};

const adjustPositiveDifference = (
    adjustedRGBValues: number[],
    targetCharCodeValue: number,
) => {
    for (let i = 2; i >= 0; i--) {
        while (
            getCharCodeFromRGB(
                adjustedRGBValues.map((value, index) =>
                    index === i ? value + 1 : value,
                ),
            ) <= targetCharCodeValue
        ) {
            adjustedRGBValues[i]++;

            if (getCharCodeFromRGB(adjustedRGBValues) === targetCharCodeValue) {
                return adjustedRGBValues;
            }
        }
    }
};

const areRGBValuesValid = (rgbValues: number[]): boolean =>
    rgbValues.some(value => value < 0 || value > 255);
