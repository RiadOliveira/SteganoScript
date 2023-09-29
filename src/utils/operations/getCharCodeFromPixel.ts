const RGB_WEIGHTS = [1, 5, 20];

export const getCharCodeFromPixel = (
    imageData: Uint8ClampedArray,
    redPixelIndex: number,
) => {
    const rgbWeightedSum = RGB_WEIGHTS.reduce(
        (previous, current, rgbInd) =>
            previous + imageData[redPixelIndex + rgbInd] * current,
        0,
    );

    return rgbWeightedSum % 256;
};
