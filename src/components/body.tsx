/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import Tab from './tab';

export default function Body({year}) {
  const [total, setTotal] = useState(0);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#000000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Total: {total}</Text>
      </View>
      <Tab year={year} total={total} setTotal={setTotal} />
    </View>
  );
}
