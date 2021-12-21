import React from 'react'
import { View, Text,StyleSheet ,TextInput} from 'react-native'

const CustominfoComponent = ({data,name,plc}) => {
    return (
        
        <View style={styles.ViewHobi}>
        <View style={styles.textView} >
            <Text style={styles.textStyle}>{name}</Text>
        </View>
        <View style={styles.View}>

<View style={styles.inputTextView}>
<Text style={styles.inputHtext}> {data}</Text>
<Text style={{color:'red'}}>*</Text>
</View>

<View style={styles.textInputView}>
    <TextInput
        name='jdf'
        placeholder={plc}
        placeholderTextColor={'#C2C2C2'}
        style={styles.inputtext}
       
       
      />

</View>
</View>
       </View>

      



       
    )
}

export default CustominfoComponent
const styles = StyleSheet.create({
 mainView:{
     height:'100%',
     width:'100%',
     flexDirection:'row'
    
 },
 

   
ViewHobi:{
    height:'27%',
    width:'100%',
   
},
textView:{
   height:'23%',
   width:'90%',
   marginLeft:'8%',
   
},
textStyle:{
   fontSize:29,
   fontFamily:'Bebas Neue',
   color:'#7A4ED9'
},
inputtext:{
   fontSize:14,
   fontWeight:'600',
  
},
textInputView:{
   height:'100%',
   width:'85%',
   alignSelf:'center',
   borderColor:'black',
   borderWidth:2,
   borderRadius:4
},


View:{
height:'50%',
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
