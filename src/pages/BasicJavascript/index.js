import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  // Primitive
  const name = 'Naufal Fawwaz Andriawan'; // String
  let age = 18; // integer
  const isMen = true; // boolean

  // Complex
  const hewan = {
    nama: 'Miaw',
    jenis: 'Kucing',
    usia: 2,
    isLocal: true,
    warna: 'Kuning',
    orangTua: {
      jantan: 'Usman',
      betina: 'Junah',
    },
  }; // Object

  const sapaOrang = (nama, usia) => {
    return console.log(`Hello ${nama} usia anda ${usia}`);
  }; // Arrow function

  const namaBuah = ['Mangga', 'Pepaya', 'Jambu', 'Bgsd'];

  typeof namaBuah; // Object

  // if (hewan.nama == "Miaw") {
  //     console.log("bener");
  // } else {
  //     console.log("Bukan asu");
  // }

  const sapaHewan = (objectHewan) => {
    // let hasilSapa = ``;
    // if (hewan.nama == "Miaw") {
    //     hasilSapa = "Hello Wor"
    // } else {
    //     hasilSapa = "Tri bgsd"
    // }

    return objectHewan.nama == 'Miaw' ? 'Hello World' : 'Tri bgsd';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Javascript</Text>
      <Text style={{marginTop: 20}}>Nama: {name}</Text>
      <Text>{sapaHewan(hewan)}</Text>
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
