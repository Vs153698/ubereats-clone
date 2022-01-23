import { SafeAreaView, StatusBar } from 'react-native';
import RootNavigation from './Navigation';

export default function App() {
  return (
    <SafeAreaView style={{flex:1,marginTop: StatusBar.currentHeight}}>
      <RootNavigation/>
    </SafeAreaView>
  );
}


