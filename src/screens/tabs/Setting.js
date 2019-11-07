import React from 'react';
import { View, Text, SafeAreaView, Image,TextInput,TouchableOpacity, StyleSheet } from 'react-native';
import { width, height } from '../../UtilMethods/Utils';

export default class Setting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return(
            <View>
                <Text>Setting</Text>
            </View>
        );
    }
}
