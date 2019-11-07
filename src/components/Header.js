import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet, Text} from "react-native";
import { width, height } from './../UtilMethods/Utils';

export default Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerProfile}>
                <Text style={props.leftTextStyle}>{props.leftText}</Text>
            </View>
            <View />
            <TouchableOpacity style={styles.headerMenu} onPress={props.onRightIcon}>
                <Image resizeMode="contain" style={{height: width('9%'),width:width('9%')}}
                       source={require('./../assets/images/profile-512.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height('10%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerProfile: {
        paddingLeft: 10,
    },
    headerMenu: {
        paddingRight: 10,
    }
});
