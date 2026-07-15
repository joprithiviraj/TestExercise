import AsyncStorage from '@react-native-async-storage/async-storage';
import {Inspection} from '../models/inspection';

const STORAGE_KEY = 'INSPECTIONS';

export const getLocalInspections = async (): Promise<Inspection[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (data) {
      return JSON.parse(data);
    }

    return [];
  } catch (error) {
    console.log('Error getting inspections:', error);
    return [];
  }
};

export const saveLocalInspections = async (
  inspections: Inspection[],
): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(inspections),
    );
  } catch (error) {
    console.log('Error saving inspections:', error);
  }
};