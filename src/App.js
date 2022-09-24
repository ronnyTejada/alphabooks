/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';

 import React from 'react';
 import {createStackNavigator} from '@react-navigation/stack';
 import Routes from './routes';

 
 import {NavigationContainer} from '@react-navigation/native';
 
 
 
 const Stack = createStackNavigator();
 
 const App = ({navigation}) => {
 //  const signed = useSelector(state => state.isSignedIn);
 
   return (
     
   
       <Routes/>
    
     
   );
 };
 
 export default App;
 