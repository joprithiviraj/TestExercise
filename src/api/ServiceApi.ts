import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import checkInternetConnection from '../utils/CheckInternetConnection';

// const baseDomain = 'http://192.168.1.100:3000'; //Local dev
const baseDomain = 'http://10.0.2.2:3000/';

/*API URLS*/

// Login Api
const inspections = baseDomain + 'inspections';

  export const getInspectionList_API = async (): Promise<any> => {
  const isConnected = await checkInternetConnection();
  if (!isConnected) return;
  try {
    // const urlEndpoints = `${SupportStaff}`;
    const res = await fetch(inspections, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch(err => {
        Alert.alert('Error', err.message);
        console.log('catch in getInspectionList_API func ' + err);
      });

    return res;
  } catch (error) {
    console.log('catch in getInspectionList_API func  ', error);
  }
};

export const addInspection_API = async (inspection: any) => {
  try {
    const response = await fetch(inspections, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inspection),
    });

    if (!response.ok) {
      throw new Error('Failed to add inspection');
    }

    return await response.json();
  } catch (error) {
    console.log('POST API Error:', error);
    throw error;
  }
};