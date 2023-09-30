export const updatePixelsUsingRGBValues = (
    imageData: Uint8ClampedArray,
    redPixelIndex: number,
    rgbValues: number[],
) => {
    rgbValues.forEach(
        (value, rgbInd) => (imageData[redPixelIndex + rgbInd] = value),
    );
};
