import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class AddCash extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pressedNumber: ""
        }

    }

    componentDidMount() {
        if(Platform.OS === 'ios')  {
            StatusBar.setHidden(true);
        }
    }

    pressedButton = (number) =>{

        console.log("pressed number is=",number);
        this.setState({
            pressedNumber:this.state.pressedNumber+number
        });

    };

    removelastchar =  () =>{

        let str=this.state.pressedNumber;

        if(str)
        {
            str = str.substring(0, str.length - 1);

            this.setState({
                pressedNumber:str
            })
        }

    };

    render() {
        return(
                <View
                    style={styles.scrollView}>
                    <View style={styles.toprow}>
                        <View>
                            <Image
                                source={require('./../assets/images/user.png')}
                                style={{ width: 40, height: 40, borderRadius: 40,borderColor:"#F3F9FE",borderWidth:1 }} />
                        </View>

                        <View>
                            <Image
                                source={require('./../assets/images/user.png')}
                                style={{ width: 40, height: 40, borderRadius: 40,borderColor:"#F3F9FE",borderWidth:1 }} />

                        </View>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={{textAlign:"center",fontWeight:"300",fontSize:50,color:"#ffff"}}>
                            <Image source={require('./../assets/images/dollar.png')} style={{width:40,height:40}} />
                            {this.state.pressedNumber}</Text>
                    </View>

                    <View style={{flex:3,backgroundColor:"#B0E0C9",justifyContent:"center"}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",margin:10,backgroundColor:"#B0E0C9",alignItems:"center"}}>

                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>this.pressedButton(1)}><Text style={styles.keypadText}>1</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>this.pressedButton(2)}><Text style={styles.keypadText}>2</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>

                                <TouchableOpacity onPress={()=>this.pressedButton(3)}  ><Text style={styles.keypadText}>3</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{flexDirection:"row",justifyContent:"space-between",margin:10,backgroundColor:"#B0E0C9",alignItems:"center"}}>

                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>this.pressedButton(4)}><Text style={styles.keypadText}>4</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>this.pressedButton(5)}><Text style={styles.keypadText}>5</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>

                                <TouchableOpacity onPress={()=>this.pressedButton(6)}  ><Text style={styles.keypadText}>6</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{flexDirection:"row",justifyContent:"space-between",margin:10,backgroundColor:"#B0E0C9",alignItems:"center"}}>

                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>this.pressedButton(7)}><Text style={styles.keypadText}>7</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>this.pressedButton(8)}><Text style={styles.keypadText}>8</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>

                                <TouchableOpacity onPress={()=>this.pressedButton(9)}  ><Text style={styles.keypadText}>9</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{flexDirection:"row",justifyContent:"space-between",margin:10,backgroundColor:"#B0E0C9",alignItems:"center"}}>

                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>this.pressedButton('.')}><Text style={styles.keypadText}>.</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>this.pressedButton(0)}><Text style={styles.keypadText}>0</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

                                <TouchableOpacity onPress={()=>this.removelastchar()}>
                                    <Image source={require('./../assets/images/cross.png')} style={{
                                        width:30,height:30
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{flex:1,backgroundColor:"#B0E0C9",flexDirection:"row",justifyContent:"space-between",margin:10}}>
                        <TouchableOpacity style={{flex:1,margin:10}} onPress={()=> ""}>

                            <View style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Request</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={{flex:1,margin:10}} onPress={()=> ""}>

                            <View style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Pay</Text>
                            </View>

                        </TouchableOpacity>
                    </View>

                </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex:1,
        backgroundColor:"#B0E0C9"
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    toprow: {
        flex:0.3,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
        backgroundColor:"#B0E0C9"
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    leftavatarContainer:{
    },
    rightavatarContainer:{
    },
    textContainer:{
        flex: 2,
        backgroundColor:"#B0E0C9",
        height:200,
        justifyContent:"center"
    },
    keypadText:{
        textAlign:"center",fontWeight:"200",fontSize:24,color:"#ffff"
    },
    submitButton:{
        height:48,
        justifyContent:"center",
        backgroundColor: '#58C148',
        borderRadius: 20,
        borderWidth: 1,
        borderColor:"#58C148"
    },
    submitButtonText:{
        textAlign:"center",
        color:"white"
    },
});
