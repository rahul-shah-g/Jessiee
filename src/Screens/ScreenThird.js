import React from 'react'
import { View, Text,Image, ImageBackground ,TouchableOpacity,TextInput} from 'react-native'
import { StyleSheet } from 'react-native'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '../Components/CustomHeader'
import CustomTextComponent from '../Components/CustomTextComponent'
import CustomSubTextComponent from '../Components/CustomSubTextComponent'
import CustomInput from '../Components/CustomInput'


const data = [
   {
       firstName : 'Educational Institution',
   placeholde :'kharkiv national university of radioelectronix',
  },
  {
    firstName : 'Specialization',
placeholde :'java developer',
},
{
    firstName : 'Graduated Year',
placeholde :'yyyy',
},

]

const ScreenThird = () => {
    const navigation = useNavigation();
    return (
        
        <View style={styles.mainView}>
         <Image 
         source={require('../Image/sideImage.png')}
         style={{height:'44%',width:'22%',position:'absolute',left:'70%',top:'47%'}}
        />
        <CustomHeader/>
        <CustomTextComponent/>
        <CustomSubTextComponent name={'EDUCATION'}/>
       
        <View style={styles.inputView}>
           {
               data.map (item=>
          <CustomInput Data={item}/>
                ) }
    
        
        </View>
        
        <View style={styles.button}>
        <CustomButton name={'Next'} button={'ScreenFourth'}/>
        </View>
        </View>
       
    )
}

export default ScreenThird
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
    
 }


 
})

