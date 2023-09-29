const RGB_WEIGHTS = [1, 5, 20];

export const getCharCodeFromRGB = (rgbValues: number[]) => {
    const rgbWeightedSum = RGB_WEIGHTS.reduce(
        (previous, current, rgbInd) => previous + rgbValues[rgbInd] * current,
        0,
    );

    return rgbWeightedSum % 256;
};
