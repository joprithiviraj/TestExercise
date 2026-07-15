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
  TextInput,
} from 'react-native';
import React, { use, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AppStackParamList } from '../../../navigationTypes';
import styles from './LoginScreenStyles';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import { strings } from '../../utils/Strings';
import Loader from '../../components/Loader/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SocialButtonProps {
  icon: ImageSourcePropType;
  onPress: () => void;
}

type AppNavigation = NativeStackNavigationProp<AppStackParamList>;

const LoginScreen = () => {
  const [email, setEmail] = useState('priraj@gmail.com');
  const [password, setPassword] = useState('Test@123');
  const navigation = useNavigation<AppNavigation>();
  const [isLoader, setIsLoader] = useState(false);


  const onSignInButtonHandler = async () => {
    let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email === '' || password === '') {
      Alert.alert(strings.appName, strings.login.emptyTextAlert);
    } else if (emailValidation.test(email) === false) {
      Alert.alert(strings.appName, strings.login.validEmailAlert);
    } else {
      Keyboard.dismiss();
      navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] });
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
          <Text style={styles.titleText}>{strings.login.titleText}</Text>
          <View style={styles.loginItemContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              value={email}
              placeholderTextColor="#5C6672"
              keyboardType="email-address"
              onChangeText={email => setEmail(email)}
            />
            <View style={{ marginTop: 20 }}>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                value={password}
                placeholderTextColor="#5C6672"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
              />
            </View>

            <View style={{ marginTop: 24 }}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => onSignInButtonHandler()}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* {isLoader && <Loader isLoading={isLoader} />} */}
    </View>
  );
};

export default LoginScreen;
