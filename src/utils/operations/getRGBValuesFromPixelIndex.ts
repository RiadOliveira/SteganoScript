export const getRGBValuesFromPixelIndex = (
    imageData: Uint8ClampedArray,
    redPixelIndex: number,
) =>
    Array.from({ length: 3 }).map(
        (_, rgbInd) => imageData[redPixelIndex + rgbInd],
    );
