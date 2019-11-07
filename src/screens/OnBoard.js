import React from 'react';
import { View, Text, SafeAreaView, Image,TextInput,TouchableOpacity, StyleSheet } from 'react-native';
import { width, height } from '../UtilMethods/Utils';

export default class OnBoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={styles.container}>
                        <View style={styles.topTextContainer}>
                            <Text style={styles.boldText}>Peace of mind is right</Text>
                            <Text style={styles.boldText}>around the corner</Text>
                        </View>
                        <View>
                            <Image source={require('./../assets/images/running.png')}
                                   resizeMode={'contain'}
                                   style={{ height: height('35%'), width: height('35%')}}
                                   />
                        </View>
                        <View style={{marginTop: height('2%')}}>
                            <Text style={[styles.boldText, {fontSize: width('5%')}]}>Enter your email to get started</Text>
                        </View>
                        <View style={[styles.shadow,styles.textInputContainer]}>
                            <TextInput
                                style={{alignItems: 'center',paddingLeft: 15, height: height('6%'),width: width('90%')}}
                                placeholder={'Email'}
                            />
                        </View>
                        <View style={styles.termCondition}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontSize: 12}}>By continuing, you agree to our </Text>
                                <Text style={{fontWeight: 'bold', fontSize: 12}}>user</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontWeight: 'bold',fontSize: 12}}>agreement </Text>
                                <Text style={{fontSize: 12}}>and</Text>
                                <Text style={{fontWeight: 'bold',fontSize: 12}}> Privacy Policy</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('TabNavigator')}
                                style={styles.continueBox}>
                                <Text style={{color: 'grey'}}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    topTextContainer: {
        alignItems: 'center',
        marginTop: height('8%')
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: width('8%')
    },
    textInputContainer: {
        backgroundColor: '#f5f5f5',
        height: height('6%'),
        width: width('90%'),
        marginTop: height('1%')
    },
    termCondition: {
        alignItems: 'center',
        marginTop: height('2%')
    },
    continueBox: {
        width: width('90%'),
        height: height('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 50
    },
    shadow: {
        elevation: 4,
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        shadowColor: 'black',
    }
});
