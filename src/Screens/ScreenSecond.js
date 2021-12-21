import React from 'react'
import { View, Text,Image, ImageBackground ,TouchableOpacity,TextInput} from 'react-native'
import { StyleSheet } from 'react-native'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '../Components/CustomHeader'
import CustomTextComponent from '../Components/CustomTextComponent'
import CustomSubTextComponent from '../Components/CustomSubTextComponent'
import CustomInput from '../Components/CustomInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ScrollView } from 'react-native-gesture-handler'

const data = [
   {
       firstName : 'Full Name',
   placeholde :'type your full name',
  },
  {
    firstName : 'Position',
placeholde :'for example: IOS developer,designer',
},
{
    firstName : 'Your Birthday',
placeholde :'dd.mm.yy',
},
{
    firstName : 'City',
placeholde :'indore',
},
{
    firstName :'Phone Number',
placeholde :'+91(................)',
},
]

const ScreenSecond = () => {
    const navigation = useNavigation();
    return (
        <KeyboardAwareScrollView>
        <View style={styles.mainView}>
         <Image 
         source={require('../Image/sideImage.png')}
         style={{height:'44%',width:'22%',position:'absolute',left:'70%',top:'47%'}}
        />
        <CustomHeader/>
        <CustomTextComponent/>
        <CustomSubTextComponent/>
       
        <View style={styles.inputView}>
           {
               data.map (item=>
          <CustomInput Data={item}/>
                ) }
    
        
        </View>
        
        <View style={styles.button}>
        <CustomButton name={'Next'} button={'ScreenThird'}/>
        </View>
        </View>
        </KeyboardAwareScrollView>
    )
}

export default ScreenSecond
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
