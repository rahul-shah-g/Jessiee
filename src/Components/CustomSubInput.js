import React from 'react'
import { View, Text,StyleSheet ,TextInput} from 'react-native'

const CustomSubInput = ({Date}) => {
    return (
        
        <View style={styles.View}>

        <View style={styles.inputTextView}>
        <Text style={styles.inputHtext}>{Date.firstname} </Text>
        <Text style={{color:'red'}}>*</Text>
        </View>
     
       <View style={styles.textInputView}>
            <TextInput
                name={Date.firstname}
                placeholder={Date.placeholde}
                placeholderTextColor={'#C2C2C2'}
                style={styles.inputtext}
               
               
              />
              
        
     
       </View>
       </View>

      



       
    )
}

export default CustomSubInput
const styles = StyleSheet.create({
 mainView:{
     height:'100%',
     width:'100%',
     flexDirection:'row'
    
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
width:'40%',

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
