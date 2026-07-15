import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import AppStack from './src/navigation/AppStack';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

export default App;
