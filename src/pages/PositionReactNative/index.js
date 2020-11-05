import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import icCart from '../../assets/icons/cart.png';

const PositionReactNative = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={icCart} style={styles.iconCart} />
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja Anda</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    iconCart: {
        width: 50,
        height: 50
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#4398D1',
        width: 93,
        height: 93,
        borderRadius: 93/2,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        fontWeight: '700',
        color: "#777777",
        marginTop: 10
    },
    notif: {
        fontSize: 14, 
        color: 'white',
        backgroundColor: "#6fcf97",
        padding: 4,
        borderRadius: 25,
        width: 28,
        height: 28,
        position: "absolute",
        textAlign: 'center',
        top: 0,
        right: 0
    }
});

export default PositionReactNative;