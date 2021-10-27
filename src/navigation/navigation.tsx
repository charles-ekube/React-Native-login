import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Auth/Login';
import Dashboard from '../screens/Dashboard/Dashboard';

const Stack = createNativeStackNavigator();

function AppNavigator() {

    return (
        <>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Dashboard' component={Dashboard}/>
            </Stack.Navigator>
        </>
    )
}

export default AppNavigator;


