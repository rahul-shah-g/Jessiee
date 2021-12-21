import React from 'react'
import { View, Text,StyleSheet ,TextInput} from 'react-native'

const CustomInput = ({Data}) => {
    return (
        <View style={styles.View}>

        <View style={styles.inputTextView}>
        <Text style={styles.inputHtext}>{Data.firstName} </Text>
        <Text style={{color:'red'}}>*</Text>
        </View>
     
       <View style={styles.textInputView}>
            <TextInput
                name={Data.firstName}
                placeholder={Data.placeholde}
                placeholderTextColor={'#C2C2C2'}
                style={styles.inputtext}
               
               
              />
              
        
     
       </View>
       </View>





       
    )
}

export default CustomInput
const styles = StyleSheet.create({
 mainView:{
     flex:1,
    
 },
 inputtext:{
    fontSize:9,
    fontWeight:'600',
   
},
textInputView:{
    height:'59%',
    width:'85%',
    alignSelf:'center',
    borderColor:'black',
    borderWidth:2,
    borderRadius:4
},


View:{
height:'20%',
width:'100%',
//  backgroundColor:'blue'
},
inputTextView:{
    height:'37%',
    width:'90%',
    marginLeft:"9%",
    flexDirection:'row',
    marginBottom:'1%',
    
    
},
inputHtext:{
   fontWeight:'bold',
    fontSize:19,
    color:'black',
   
},
})
