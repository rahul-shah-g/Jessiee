import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.ImageView}>
            <ImageBackground
                source={require('../Image/traingular.png')}
                style={styles.traingular}
            >
                <TouchableOpacity style={styles.icon} onPress={() => { navigation.goBack() }}>

                    <Image
                        source={require('../Image/left.png')}
                        style={styles.iconImage}
                    />

                </TouchableOpacity>

                <View style={styles.subImageView}>
                    <Image
                        source={require('../Image/mainTraingular.png')}
                    />
                </View>
            </ImageBackground>
        </View>

    )
}

export default CustomHeader
const styles = StyleSheet.create({

    ImageView: {
        height: '25%',
        width: '100%',
       

    },

    traingular: {
        height: '100%',
        width: '100%',
        justifyContent: 'center'

    },
    subImageView: {
        height: '50%',
        width: '40%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: '16%',
        width: '7%',

    },
    iconImage: {
        height: '70%',
        width: '40%',
        alignSelf: 'center'
    }
})
