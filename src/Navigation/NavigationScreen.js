import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import ScreenFirst from '../Screens/ScreenFirst';
import ScreenSecond from '../Screens/ScreenSecond'
import ScreenThird from '../Screens/ScreenThird'
import ScreenFourth from '../Screens/Screenfourth'
import ScreenFivth from '../Screens/ScreenFivth'
import ScreenSixth from '../Screens/ScreenSixth'
import ScreenSeventh from '../Screens/ScreenSeventh'
//-----------------------------------------------------------------------

const stack = createStackNavigator();
const NavigationScreen = () => {
    return (
        <NavigationContainer>
          <stack.Navigator name="chat" initialRouteName="ScreenFirst">

          <stack.Screen
          name="ScreenFirst"
          options={{
            header: () => null,
          }}
          component={ScreenFirst}  
          />

<stack.Screen
          name="ScreenSecond"
          options={{
            header: () => null,
          }}
          component={ScreenSecond}  
          />

         <stack.Screen
          name="ScreenThird"
          options={{
            header: () => null,
          }}
          component={ScreenThird}  
          />
           <stack.Screen
          name="ScreenFourth"
          options={{
            header: () => null,
          }}
          component={ScreenFourth}  
          />
          <stack.Screen
          name="ScreenFivth"
          options={{
            header: () => null,
          }}
          component={ScreenFivth}  
          />
           <stack.Screen
          name="ScreenSixth"
          options={{
            header: () => null,
          }}
          component={ScreenSixth}  
          />
           <stack.Screen
          name="ScreenSeventh"
          options={{
            header: () => null,
          }}
          component={ScreenSeventh}  
          />




         

      </stack.Navigator>


        </NavigationContainer>
    )
}

export default NavigationScreen