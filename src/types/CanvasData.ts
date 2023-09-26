import { Canvas, CanvasRenderingContext2D, ImageData } from 'canvas';

export interface CanvasData {
    canvas: Canvas;
    context: CanvasRenderingContext2D;
    imageData: ImageData;
}
