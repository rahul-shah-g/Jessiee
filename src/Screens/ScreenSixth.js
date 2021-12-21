import React from 'react'
import { View, Text,Image, ImageBackground ,TouchableOpacity,TextInput} from 'react-native'
import { StyleSheet } from 'react-native'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '../Components/CustomHeader'
import CustomTextComponent from '../Components/CustomTextComponent'
import CustominfoComponent from '../Components/custominfoComponent'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'




const ScreenSixth = () => {
    const navigation = useNavigation();
    return (
       
        <View style={styles.mainView}>
         <Image 
         source={require('../Image/sideImage.png')}
         style={{height:'44%',width:'22%',position:'absolute',left:'70%',top:'47%'}}
        />
        <CustomHeader/>
        <CustomTextComponent/>
         <CustominfoComponent name={'YOUR HOBBIES'}  data={'How you spend your free time?'} plc={'hobbies, sport, etc...'}/>
         <CustominfoComponent  name={'ADDITIONAL INFORMATION '}  data={'Have any questions for us?'} plc={'Be in touch :)'}/>
         
        
        <View style={styles.button}>
        <CustomButton name={'Send Form'} button={'ScreenSeventh'}/>
        </View>
        </View>
       
    )
}

export default ScreenSixth
const styles = StyleSheet.create({
 mainView:{
    height:'100%',
    width:'100%'
    
 },
 inputView:{
    height:'89%',
    width:'100%',
    backgroundColor:'red'
   
    
   
},
 
 button:{
     height:'20%',
     width:'85%',
     alignSelf:'center',
     marginTop:'1%'
    
 },
 ViewHobi:{
     height:'29%',
     width:'100%',
     backgroundColor:'red'
 },
 textView:{
    height:'23%',
    width:'50%',
    marginLeft:'8%',
    
},
textStyle:{
    fontSize:30,
    fontFamily:'Bebas Neue',
    color:'#7A4ED9'
},
inputtext:{
    fontSize:9,
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

