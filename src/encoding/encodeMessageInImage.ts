import { OperationData } from 'types/OperationData';
import { getRGBValuesDistribution } from 'utils/operations/getRGBValuesDistribution';

export const encodeMessageInImage = async ({
    canvasData,
    message,
}: OperationData) => {
    getRGBValuesDistribution([255,255,255], 0)
};
