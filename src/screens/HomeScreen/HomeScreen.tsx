import React, {useCallback} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchInspections} from '../../redux/actions/inspectionActions';
import {RootState} from '../../redux/reducers';
import styles from './HomeScreenStyles';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Loader from '../../components/Loader/Loader';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {AppStackParamList} from '../../../navigationTypes';

type AppNavigation = NativeStackNavigationProp<AppStackParamList>;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<AppNavigation>();

  const {loading, inspections, error} = useSelector(
    (state: RootState) => state.inspection,
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchInspections());
    }, []),
  );

  const onSignOutButtonHandler = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  };

  const onAddInspectionButtonHandler = () => {
    navigation.navigate('AddInspectionScreen');
  };

  const renderItem = ({item}: any) => (
    <View style={styles.card}>
      {item.photo ? (
        <Image
          source={{uri: item.photo}}
          style={styles.cardImage}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.placeholderImage} />
      )}

      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.inspectionName}</Text>

        <Text style={styles.description}>
          {item.inspectionDescription}
        </Text>

        <Text style={styles.status}>{item.syncStatus}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      <BackgroundImage />

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onSignOutButtonHandler}>
          <Text style={styles.headerText}>Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onAddInspectionButtonHandler}>
          <Text style={styles.headerText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bodyContainer}>
        <FlatList
          data={inspections}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </View>

      {loading && <Loader isLoading={true} />}
    </View>
  );
};

export default HomeScreen;