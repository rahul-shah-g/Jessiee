import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
const ScreenFirst = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>

                <ImageBackground
                    source={require('../Image/firstImage.png')}
                    style={styles.mainBackgroundImage}>
                    <View style={{ height: '100%', width: '100%', backgroundColor: '#000745', opacity: 0.7 }}>
                        <View style={{ height: '35%' }}>
                            <ImageBackground
                                source={require('../Image/One.png')}
                                style={styles.subBackgroundImage}>
                                <View style={styles.subImageView}>
                                    <Image
                                        source={require('../Image/Frame.png')}

                                    />
                                    <Text style={styles.Text}>SPRY ROCKS</Text>

                                </View>


                            </ImageBackground>


                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.Text1}>Welcome!</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <Text style={styles.Text2}>Want to be a part of team?</Text>
                            <CustomButton  name ={'Send Form'} button={'ScreenSecond'}/>

                        </View>
                        <View style={styles.endView}>
                            <Image
                                source={require('../Image/circul.png')}
                            />
                            <View style={styles.endText}>
                                <Text style={styles.Text3}>SPRYROCKS.COM</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

            </View>
        </View>
    )
}

export default ScreenFirst
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainBackgroundImage: {
        height: '100%', width: '100%',
    },
    subBackgroundImage: { height: '90%', width: '100%' },
    subImageView: { height: '80%', width: '80%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
    Text: { fontSize: 44, color: '#FFFFFF', fontFamily: ' Bebas Neue' },
    Text1: { fontSize: 65, color: '#FFFFFF', fontFamily: ' Bebas Neue', textAlign: 'center' },
    Text2: { fontSize: 27, color: '#FFFFFF', fontFamily: ' Bebas Neue', textAlign: 'center', },
    Text3: { fontSize: 20, color: '#FFFFFF', fontFamily: ' Bebas Neue', textAlign: 'center', },

    textView: { height: '15%', width: '80%', alignSelf: 'center', justifyContent: 'center', marginBottom: '12%' },
    buttonView: { height: '25%', width: '80%', alignSelf: 'center', justifyContent: 'center' },

    endView: { height: '14%', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' },
    endText: { borderBottomColor: 'white', borderBottomWidth: 3 }


})
