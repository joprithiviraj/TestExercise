
import {Inspection} from '../models/inspection';
import {getLocalInspections} from '../utils/storage';

export const getInspections = async (): Promise<Inspection[]> => {
  return await getLocalInspections();
};