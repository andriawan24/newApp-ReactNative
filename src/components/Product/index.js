import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import macbook from '../../assets/images/macbook.jpeg';

const Product = (props) => {
    return (
        <View>
            <View style={styles.wrapper}>
                <Image source={macbook} style={styles.imageProduct} />
                <Text style={styles.productName}>New Macbook Pro 2020</Text>
                <Text style={styles.productPrice}>Rp200.000</Text>
                <Text style={styles.productLoc}>Jakarta Barat</Text>
                <TouchableOpacity onPress={props.onButtonPressed}>
                    <View style={styles.btnBeli}>
                        <Text style={styles.textBtn}>Beli</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    wrapper: {
        padding: 12, 
        margin: 20,
        backgroundColor: "#F2F2F2", 
        width: 212,
        borderRadius: 8
    },
    imageProduct: {width: 180, height: 107, borderRadius: 8},
    productName: { fontSize: 14, fontWeight: 'bold', marginTop: 1 },
    productPrice: {fontSize: 12, fontWeight: "bold", color: "#F2994A", marginTop: 10},
    productLoc: {fontSize: 12, fontWeight: '300', marginTop: 12},
    btnBeli: {backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 20},
    textBtn: {fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}
})
