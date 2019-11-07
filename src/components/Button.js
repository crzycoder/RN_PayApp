import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from "react-native";
import { width, height } from './../UtilMethods/Utils';

export default Button = (props) => {
    return (
        <TouchableOpacity
            style={[styles.container, props.containerStyle]}
            onPress={props.addCash}
        >
            <Text style={{}}>
                {props.buttonText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height('6%'),
        width: width('40%'),
        borderRadius: 50,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
