import React from 'react';
import {TouchableOpacity, StyleSheet, Text,View, Image} from "react-native";
import { width, height } from './../UtilMethods/Utils';

export default AddBox = (props) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <TouchableOpacity style={styles.addBox}>
                <Image source={require('./../assets/images/plus-512.png')}
                       resizeMode={'contain'}
                       style={{width: width('4%'), height: width('4%')}}
                />
            </TouchableOpacity>
            <View style={{marginLeft: width('4%')}}>
                <Text style={{ opacity: .4}}>
                    {props.addBoxText}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height('6%'),
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: width('4%')
    },
    addBox: {
        width: width('10%'),
        height: height('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#f5f5f5'
    }
});
