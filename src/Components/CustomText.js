import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CustomText = () => {
    return (
        <View>
            <Text style={styles.text}>
            Glad to see you, friend!</Text>

 <Text style={styles.text2}>  SPRY ROCKS is a rapidly developing European company with headquarter at Kharkiv, Ukraine.
<Text style={styles.text2}>Our company was founded in 2014 and although we are a young team we have a lot of successful projects and satisfied customers. </Text>
<Text style={styles.text2}></Text> In work with every particular customer, the main philosophy is to establish and keep good relations.</Text>
<Text style={styles.text2}>We develop innovative solutions that not only contribute to the success of our customer's businesses but also give them a competitive market advantage. 
  Because your success is our success too!</Text>


        </View>
    )
}

export default CustomText
const styles = StyleSheet.create({
   text: {
       color:'black',
   fontSize:22,
   marginLeft:'5%'
},

text2: {
    color:'black',
fontSize:22,
marginLeft:'3%',
marginTop:'3%'
}
})
