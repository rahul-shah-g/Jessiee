import React from 'react'
import { View, Text,Image, ImageBackground ,TouchableOpacity,TextInput} from 'react-native'
import { StyleSheet } from 'react-native'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '../Components/CustomHeader'
import CustomTextComponent from '../Components/CustomTextComponent'
import CustomSubTextComponent from '../Components/CustomSubTextComponent'
import CustomInput from '../Components/CustomInput'
import { ScrollView } from 'react-native-gesture-handler'
import CustomSubInput from '../Components/CustomSubInput'


const data = [
   {
       firstName : 'Place of work',
   placeholde :'enter name here',
  },
  {
    firstName : 'Position held',
placeholde :'enter name here',
},

]


const startData = [
    {
        firstname : 'Start',
    placeholde :'mm.yyyy',
   },
   {
     firstname : 'End',
 placeholde :'mm.yyyy',
 },
 ]
 

const ScreenFivth = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainView}>
         <Image 
         source={require('../Image/sideImage.png')}
         style={{height:'44%',width:'22%',position:'absolute',left:'70%',top:'47%'}}
        />
        <CustomHeader/>
        <CustomTextComponent/>
        <CustomSubTextComponent name={'WORK EXPERIENCE'}/>
       
        <View style={styles.inputView}>
        { 
               data.map (item=>
          <CustomInput Data={item}/>
       
         
                )
                
                  }
            <View style={styles.input}>
                  { 
               startData.map (item=>
          <CustomSubInput Date={item}/>
       
         
                )
                
                  }
                  </View>
        
        </View>
        
        <View style={styles.button}>
        <CustomButton name={'Next'} button={'ScreenSixth'}/>
        </View>
        </View>
    )
}

export default ScreenFivth
const styles = StyleSheet.create({
 mainView:{
    height:'100%',
    width:'100%'
    
 },
 inputView:{
    height:'48%',
    width:'100%',
   
    
   
},
 
 button:{
     height:'20%',
     width:'85%',
     alignSelf:'center',
     marginTop:'1%'
    
 },
 input:{
     height:'100%',
     width:'100%',
     flexDirection:'row',
    marginLeft:'10%'
     
 }


 
})

