/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View, TextInput} from 'react-native';

export default function Tab({year, total, setTotal}) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  function update(e: any, m: any, p: any) {
    if (p === 'plus') {
      let d = (total = Number(e));
      console.log(d, e);

      setTotal(d);
    }
  }

  return (
    <ScrollView>
      {months.map((e, i) => {
        return (
          <View
            style={{
              width: '100%',
              height: 80,
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: 5,
            }}
            key={i}>
            <Text
              style={{
                width: '100%',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              ~ {e}
            </Text>
            <View
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#ffffff',
                  padding: 5,
                }}>
                +
              </Text>
              <TextInput
                id="plus"
                onChange={f => update(f.nativeEvent.text, e, 'plus')}
                textAlign="center"
                inputMode="numeric"
                keyboardType="numeric"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#ffffff',
                  width: '40%',
                  height: '80%',
                }}
              />

              <Text
                style={{
                  fontSize: 20,
                  color: '#ffffff',
                  padding: 5,
                  marginLeft: 5,
                }}>
                -
              </Text>
              <TextInput
                id="plus"
                onChange={f => update(f.nativeEvent.text, e, 'min')}
                textAlign="center"
                inputMode="numeric"
                keyboardType="numeric"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#ffffff',
                  width: '40%',
                  height: '80%',
                }}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
