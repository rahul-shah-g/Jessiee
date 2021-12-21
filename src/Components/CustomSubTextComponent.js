import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CustomSubTextComponent = ({name}) => {
    return (
        <View style={styles.textView} >
            <Text style={styles.textStyle}>{name}</Text>
        </View>
    )
}

export default CustomSubTextComponent
const styles = StyleSheet.create({
    textView:{
        height:'7%',
        width:'80%',
        marginLeft:'8%',
        
    },
    textStyle:{
        fontSize:30,
        fontFamily:'Bebas Neue',
        color:'#7A4ED9'
    }
})
