import React from 'react';
import { View, Text,Image, SafeAreaView, StyleSheet } from 'react-native';
import { width, height } from '../../UtilMethods/Utils';
import Header from '../../components/Header';
import Button from '../../components/Button';
import AppleSettingList from '../../components/AppleSettingList';
import AddBox from '../../components/AddBox';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    _addCash = () => {
        console.log('AddCash');
        this.props.navigation.navigate('AddCash');
    };

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <Header leftText={'My Cash'}
                                leftTextStyle={{fontSize: 16, fontWeight: 'bold'}}
                        />
                        <View style={styles.cash}>
                            <View style={{flexDirection: 'row', bottom: width('5%')}}>
                                <Image source={require('./../../assets/images/cash-512.png')}
                                       resizeMode={'contain'}
                                       style={{width: width('10%'), height: width('10%'), marginTop: width('1.3%')}}
                                />
                                <Text style={styles.price}>0.00</Text>
                            </View>
                            <Text style={{fontSize: 14, color: 'grey', bottom: width('5%')}}>Available</Text>
                        </View>
                        <View style={{flexDirection: 'row', width: width('100%'), justifyContent: 'center'}}>
                            <Button
                                buttonText={'Add Cash'}
                                addCash={this._addCash.bind(this)}
                            />
                            <Button buttonText={'Cash Out'}
                                    containerStyle={{marginLeft: width('8%')}}
                            />
                        </View>
                        <View style={{flex: 1}}>
                            <View style={styles.list}>
                                <AppleSettingList listText={'Cash'}
                                                  icon={require('./../../assets/images/cash-512.png')}
                                />
                                <AppleSettingList listText={'Bitcoin'}
                                                  icon={require('./../../assets/images/bitCoin-512.png')}
                                />
                                <AppleSettingList listText={'Bank of America'}
                                                  icon={require('./../../assets/images/bank-512.png')}
                                />
                            </View>
                            <View style={styles.addBox}>
                                <AddBox addBoxText={'Add Bank'}/>
                                <AddBox addBoxText={'Add Credit Card'}/>
                            </View>
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
    cash: {
        height: height('24%'),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    price: {
        fontWeight: 'bold',
        fontSize: width('10%'),
        right: width('1%'),
    },
    list: {
        width: width('100%'),
        marginTop: height('1%'),
        height: height('22%'),
        justifyContent: 'space-between'
    },
    addBox: {
        width: width('100%'),
        marginTop: height('2%'),
        height: height('15%'),
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});
