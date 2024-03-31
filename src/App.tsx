/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import styles from './utils/styles';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  let date = new Date();
  const [year, setYear] = useState(date.getFullYear().toString());

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={[styles.background, styles.body]}>
        <Header />
        <View
          style={{
            width: '100%',
            height: '88%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}>
          <Body year={year} />
        </View>
        <Footer year={year} setYear={setYear} />
      </View>
    </SafeAreaView>
  );
}

export default App;
