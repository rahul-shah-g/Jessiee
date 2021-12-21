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
       firstName : 'Educational Organization',
   placeholde :'enter name here',
  },
  {
    firstName : 'Course',
placeholde :'enter name here',
},
{
    firstName : 'Graduated Year',
placeholde :'yyyy',
},

]

const ScreenFourth = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainView}>
         <Image 
         source={require('../Image/sideImage.png')}
         style={{height:'44%',width:'22%',position:'absolute',left:'70%',top:'47%'}}
        />
        <CustomHeader/>
        <CustomTextComponent/>
        <CustomSubTextComponent name={'COURSES'}/>
       
        <View style={styles.inputView}>
           {
               data.map (item=>
          <CustomInput Data={item}/>
                ) }
    
        
        </View>
        
        <View style={styles.button}>
        <CustomButton name={'Next'} button={'ScreenFivth'}/>
        </View>
        </View>
    )
}

export default ScreenFourth
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

