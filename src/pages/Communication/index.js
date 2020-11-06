import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Communication = () => {
  const [totalProduk, setTotalProduct] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Communication</Text>
      <Cart qty={totalProduk} />
      <Product onButtonPressed={() => setTotalProduct(totalProduk + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});

export default Communication;
