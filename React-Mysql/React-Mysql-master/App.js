import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Screen/HomeScreen';
import ViewData from './Screen/ViewData';
import InsertData from './Screen/InsertData';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    const Stack = createNativeStackNavigator();
    return ( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='View' component={ViewData}/>
          <Stack.Screen name='Insert' component={InsertData} />
        </Stack.Navigator>
      </NavigationContainer>
     );
  }
}
 
export default App;