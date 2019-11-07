import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import {isIphoneX} from '../../UtilMethods/Utils';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (isIphoneX() ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default class Swap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    renderNavBar = () => (
        <View style={styles.navContainer}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
                <TouchableOpacity style={{}} onPress={() => console.log('onAddPress')}>
                    <Image source={require('./../../assets/images/plus-512.png')}
                           style={{width:25, height:25, tintColor:'#fff'}}
                           resizeMode={'contain'}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{}} onPress={() => console.log('onSearchPress')}>
                    <Image source={require('./../../assets/images/search-512.png')}
                           style={{width:25, height:25, tintColor:'#fff'}}
                           resizeMode={'contain'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

    renderContent = () => {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>first</Text>
                <Text>second</Text>
                <Text>third</Text>
            </View>
        );
    };

    render() {
        return(
            <View style={styles.container}>
                <ReactNativeParallaxHeader
                    headerMinHeight={HEADER_HEIGHT}
                    headerMaxHeight={200}
                    extraScrollHeight={20}
                    navbarColor="#db34b7"
                    title="Cash"
                    alwaysShowNavBar={false}
                    alwaysShowTitle={false}
                    titleStyle={styles.titleStyle}
                    // backgroundImage={images.background}
                    backgroundImageScale={1.2}
                    renderNavBar={this.renderNavBar}
                    renderContent={this.renderContent}
                    containerStyle={styles.container}
                    contentContainerStyle={styles.contentContainer}
                    innerContainerStyle={styles.container}
                    scrollViewProps={{
                        onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
                        onScrollEndDrag: () => console.log('onScrollEndDrag'),
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
    },
    navContainer: {
        height: HEADER_HEIGHT,
        marginHorizontal: 10,
    },
    statusBar: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: 'transparent',
    },
    navBar: {
        height: NAV_BAR_HEIGHT,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
