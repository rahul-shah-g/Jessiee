import React from 'react'
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
 
const CustomButton = ({name,button}) => {
    const navigation = useNavigation();
    

    return (
        <View elevation={5} style={[styles.button,styles.shadowProp]}>
        <TouchableOpacity onPress={()=>{navigation.navigate(button)}}>
   
        <Text style={styles.Text2}>{name}</Text>

  
         </TouchableOpacity>
   
  </View> 
    )
}

export default CustomButton
const styles = StyleSheet.create({
    Text2:{
        fontSize:27,
        color:'#FFFFFF',
        fontFamily:' Bebas Neue',
        textAlign:'center'
    },
    shadowProp: {
        shadowColor: '#56a3b8',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4,
        shadowRadius: 0,
      },
      button:{
          height:'35%',
          width:'100%',
          backgroundColor:'#7A4ED9'
          ,borderRadius:10,
          justifyContent:'center',
          marginTop:'2%'
        },
})
