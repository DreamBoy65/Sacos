/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {RootTagContext, Text, View} from 'react-native';

export default function Footer({year, setYear}) {
  function handlep() {
    let date = Number(year) - 1;
    setYear(String(date));
  }

  function handlen() {
    let date = Number(year) + 1;
    setYear(String(date));
  }

  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: '#000000',
        position: 'fixed',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
      }}>
      <Text
        onPress={handlep}
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          height: '100%',
          textAlign: 'center',
        }}>
        ⋘
      </Text>
      <Text
        style={{
          height: '100%',
          textAlign: 'center',
          fontSize: 25,
          color: '#ffffff',
          fontWeight: 'bold',
          marginLeft: 10,
          marginRight: 10,
        }}>
        {year}
      </Text>
      <Text
        onPress={handlen}
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          height: '100%',
          textAlign: 'center',
        }}>
        ⋙
      </Text>
    </View>
  );
}
