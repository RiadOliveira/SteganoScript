import { RGB_WEIGHTS } from 'constants/rgbWeights';
import { getCharCodeFromRGB } from './getCharCodeFromRGB';

export const getCharCodeFromPixel = (
    imageData: Uint8ClampedArray,
    redPixelIndex: number,
) => {
    const rgbValues = Array.from({ length: RGB_WEIGHTS.length }).map(
        (_, rgbInd) => imageData[redPixelIndex + rgbInd],
    );

    return getCharCodeFromRGB(rgbValues);
};
