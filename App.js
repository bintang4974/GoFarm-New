import { NativeBaseProvider } from 'native-base';
import { LogBox, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Router from './src/router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  const _retriveData = async () => {
    try {
      const data = await AsyncStorage.getItem("KeepLoggedIn");
      console.log(data);
      isLogged(data);
    } catch (error) {

    }
  }

  useEffect(() => {
    _retriveData();
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, [])

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </Provider>
  );
}
