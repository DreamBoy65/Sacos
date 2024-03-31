/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Text, View} from 'react-native';

export default function Header(): React.JSX.Element {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        borderBottomLeftRadius: 30,
      }}>
      <Text
        style={{
          padding: 5,
          fontSize: 30,
          backgroundColor: '#ffffff',
          width: 'auto',
          height: '100%',
          color: '#000000',
          paddingLeft: 30,
          paddingRight: 30,
          borderTopRightRadius: 25,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 10,
          fontWeight: '500',
        }}>
        Sacos
      </Text>

      {/* <Text
        style={{
          padding: 5,
          fontSize: 30,
          width: 'auto',
          height: '100%',
          color: '#ffffff',
          paddingRight: 10,
          marginLeft: 'auto',
        }}>
        +
      </Text> */}
    </View>
  );
}
