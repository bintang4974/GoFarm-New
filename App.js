import { NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native';
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
  }, [])

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
