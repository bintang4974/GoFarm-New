import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from './src/pages';
import { NativeBaseProvider } from 'native-base';
import Router from './src/router';

export default function App() {
  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
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
