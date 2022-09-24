import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import Details from './screen/Details';
import Home from './screen/Home';
import ReaderScreen from './screen/Reader';

const Stack = createStackNavigator();

function Routes(props) {

    return (
        <NavigationContainer>



            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>

                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen name="Details" component={Details} />

                <Stack.Screen name="Reader" component={ReaderScreen} />




            </Stack.Navigator>



        </NavigationContainer>



    )

}

export default Routes