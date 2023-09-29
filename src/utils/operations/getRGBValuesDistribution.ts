import { getCharCodeFromRGB } from './getCharCodeFromRGB';

export const getRGBValuesDistribution = (
    originalRGBValues: number[],
    targetCharCodeValue: number,
): number[] => {
    const originalRGBValuesCharCode = getCharCodeFromRGB(originalRGBValues);
    console.log(`original RGB values: ${originalRGBValues} | original char code: ${originalRGBValuesCharCode} | target char code: ${targetCharCodeValue}`)

    let difference = targetCharCodeValue - originalRGBValuesCharCode;
    const adjustedRGBValues = [...originalRGBValues];
  
    while (difference !== 0) {
      for (let i = 0; i < 3; i++) {
        if (difference === 0) break;
  
        const adjustmentAmount = Math.min(Math.abs(difference), 256);
        const sign = difference < 0 ? -1 : 1;
  
        adjustedRGBValues[i] += sign * adjustmentAmount;
  
        if (adjustedRGBValues[i] > 255) {
          adjustedRGBValues[i] -= 255;
        } else if (adjustedRGBValues[i] < 0) {
          adjustedRGBValues[i] += 0;
        }
  
        difference -= sign * adjustmentAmount;
      }
    }
  
    console.log(`readjusted RGB values: ${adjustedRGBValues} | readjusted char code: ${getCharCodeFromRGB(adjustedRGBValues)}`)
    return adjustedRGBValues;
};
