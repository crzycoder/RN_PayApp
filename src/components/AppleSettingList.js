import React from 'react';
import {TouchableOpacity, StyleSheet, Text,View, Image} from "react-native";
import { width, height } from './../UtilMethods/Utils';

export default AppleSettingList = (props) => {
    return (
        <TouchableOpacity style={[styles.container, props.containerStyle]}>
            <View style={{alignItems: 'center', flexDirection: 'row',marginLeft: width('4%')}}>
                <Image source={props.icon}
                       resizeMode={'contain'}
                       style={{width: width('9%'), height: width('9%')}}
                />
                <Text style={{marginLeft: width('2%')}}>
                    {props.listText}
                </Text>
            </View>
            <Image source={require('./../assets/images/arrow_right-512.png')}
                   resizeMode={'contain'}
                   style={{ opacity: .5, width: width('9%'), height: width('9%')}}
                   />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height('6%'),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
