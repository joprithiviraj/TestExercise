import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  ScrollView,
  Alert,
  Keyboard,
  Platform,
  PermissionsAndroid,
  TextInput,
} from 'react-native';
import React, { use, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AppStackParamList } from '../../../navigationTypes';
import styles from './AddInspectionScreenStyles';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import { strings } from '../../utils/Strings';
import Loader from '../../components/Loader/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocalInspections, saveLocalInspections } from '../../utils/storage';
import { Inspection } from '../../models/inspection';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { addInspection_API } from '../../api/ServiceApi';
import checkInternetConnection from '../../utils/CheckInternetConnection';
import { useDispatch } from 'react-redux';
import { addInspection } from '../../redux/actions/inspectionActions';

interface SocialButtonProps {
  icon: ImageSourcePropType;
  onPress: () => void;
}

type AppNavigation = NativeStackNavigationProp<AppStackParamList>;

const AddInspectionScreen = () => {
  const navigation = useNavigation<AppNavigation>();
  const [inspectionName, setInspectionName] = useState('');
  const [inspectionDescription, setInspectionDescription] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [photo, setPhoto] = useState('');

  const newInspection = {
    inspectionName: inspectionName,
    inspectionDescription: inspectionDescription,
    photo: photo,
    syncStatus: 'Synced',
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
          buttonPositive: 'OK',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }

    return true;
  };

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();

    if (!hasPermission) {
      console.log('Camera permission denied');
      return;
    }

    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.8,
    });

    console.log(result);

    if (result.didCancel) {
      return;
    }

    if (result.assets && result.assets.length > 0) {
      setPhoto(result.assets[0].uri || '');
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
    });

    if (result.didCancel) {
      return;
    }

    if (result.assets && result.assets.length > 0) {
      setPhoto(result.assets[0].uri || '');
    }
  };

  const callInspectionApi = async (inspection: Inspection) => {
    setIsLoader(true);
    try {
      const response = await addInspection_API(inspection);
      console.log('POST Success:', response);
      setIsLoader(false);
      navigation.goBack();
    } catch (error) {
      console.log('API Failed:', error);
      // // API failed, save locally
      // const list = await getLocalInspections();
      // list.push(inspection);
      // await saveLocalInspections(list);
      // setIsLoader(false);
      // navigation.goBack();
    }
  };

  // const onSubmitButtonHandler = async () => {
  //   if (inspectionName === '' || inspectionDescription === '') {
  //     Alert.alert(strings.appName, strings.addInspection.emptyTextAlert);
  //     return;
  //   }
  //   const list = await getLocalInspections();
  //   const nextId =
  //     list.length === 0 ? 1 : Math.max(...list.map(item => item.id)) + 1;
  //   const newInspection: Inspection = {
  //     id: nextId,
  //     inspectionName,
  //     inspectionDescription,
  //     photo,
  //     syncStatus: 'Pending Sync',
  //   };

  //   console.log(JSON.stringify(newInspection));
  //   const isConnected = await checkInternetConnection();
  //   console.log('isConnected', isConnected);
  //   if (isConnected) {
  //     // Internet Available
  //     await callInspectionApi(newInspection);
  //   } else {
  //     // No Internet
  //     list.push(newInspection);

  //     await saveLocalInspections(list);

  //     navigation.goBack();
  //   }
  // };

  const onSubmitButtonHandler = async () => {
    if (inspectionName.trim() === '' || inspectionDescription.trim() === '') {
      Alert.alert(strings.appName, strings.addInspection.emptyTextAlert);
      return;
    }

    setIsLoader(true);

    try {
      const list = await getLocalInspections();

      const nextId =
        list.length === 0 ? 1 : Math.max(...list.map(item => item.id)) + 1;

      const newInspection: Inspection = {
        id: nextId,
        inspectionName,
        inspectionDescription,
        photo,
        syncStatus: 'Pending Sync',
      };

      const isConnected = await checkInternetConnection();

      console.log('isConnected', isConnected);

      if (isConnected) {
        // Online → POST API
        await addInspection_API(newInspection);

        console.log('POST Success');
        Alert.alert('Success', 'Inspection added successfully.');
        navigation.goBack();
      } else {
        // Offline → Save locally
        list.push(newInspection);

        await saveLocalInspections(list);

        console.log('Saved to AsyncStorage');

        navigation.goBack();
      }
    } catch (error) {
      console.log('Submit Error', error);

      Alert.alert('Error', 'Unable to save inspection.');
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <BackgroundImage />
        <View style={styles.bodyContainer}>
          <Text style={styles.appNameText}>{strings.appName}</Text>
          <Text style={styles.titleText}>
            {strings.addInspection.titleText}
          </Text>
          <View style={styles.loginItemContainer}>
            <Text style={styles.textTitleLabel}>
              {strings.addInspection.namePlaceholder}
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder={strings.addInspection.namePlaceholder}
              value={inspectionName}
              placeholderTextColor="#5C6672"
              keyboardType="email-address"
              onChangeText={inspectionName => setInspectionName(inspectionName)}
            />
            <View style={{ marginTop: 20 }}>
              <Text style={styles.textTitleLabel}>
                {strings.addInspection.descriptionPlaceholder}
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder={strings.addInspection.descriptionPlaceholder}
                value={inspectionDescription}
                placeholderTextColor="#5C6672"
                onChangeText={inspectionDescription =>
                  setInspectionDescription(inspectionDescription)
                }
              />
            </View>
            {photo !== '' && (
              <Image
                source={{ uri: photo }}
                style={{
                  width: 120,
                  height: 120,
                  marginTop: 20,
                  borderRadius: 10,
                }}
              />
            )}
            <View style={styles.galleryButtonView}>
              <TouchableOpacity
                onPress={openCamera}
                style={styles.galleryButtonStyle}
              >
                <Text style={styles.galleryButtonText}>Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={openGallery}
                style={styles.galleryButtonStyle}
              >
                <Text style={styles.galleryButtonText}>Gallery</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 24 }}>
              <TouchableOpacity
                style={styles.SubmitButton}
                onPress={() => onSubmitButtonHandler()}
              >
                <Text style={styles.SubmitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* {isLoader && <Loader isLoading={isLoader} />} */}
    </View>
  );
};

export default AddInspectionScreen;
