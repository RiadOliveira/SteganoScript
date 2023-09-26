import { CanvasData } from 'types/CanvasData';

export const getInitialPixelForOperation = ({
    canvas: { width, height },
    imageData: { data: pixels },
}: CanvasData) => {
    const lowerDimension = Math.max(width, height);
    const higherDimension = Math.max(width, height);

    const ratio = lowerDimension / (higherDimension * Math.E);
    const pixelIndex = Math.round(ratio * pixels.length);

    return pixelIndex - (pixelIndex % 4);
};
