import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  AddInspectionScreen: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>;
