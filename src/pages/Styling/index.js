import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import macbook from '../../assets/images/macbook.jpeg';

const Styling = () => {
  return (
    <View>
      {/* <Text style={styles.text}>Styling Component</Text>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "skyblue",
            borderWidth: 2,
            borderColor: 'lightgreen',
            marginTop: 20,
            marginStart: 20
          }} /> */}
      <View
        style={{
          padding: 12,
          margin: 20,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 180, height: 107, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
          }}>
          New Macbook Pro 2020
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 10,
          }}>
          Rp200.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#6FCF97',
              paddingVertical: 6,
              borderRadius: 25,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: 'white',
                textAlign: 'center',
              }}>
              Beli
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'skyblue',
    marginStart: 20,
    marginTop: 40,
  },
});

export default Styling;
