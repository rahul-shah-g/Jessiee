import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const CustomTextComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.textView}>
            <Text style={styles.Text1}>Fill THE FORM</Text>
            <Text style={styles.Text2}>area with * must be filled</Text>

        </View>
    )
}

export default CustomTextComponent
const styles = StyleSheet.create({
    textView: {
        height: '10%',
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
       
    },
    Text1: {
        fontSize: 33,
        color: '#000000',
        fontWeight: 'bold',
    },
    Text2: {
        fontSize: 12,
        color: '#000000',

    },
})
