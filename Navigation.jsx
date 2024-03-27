// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './TelaInicial';
import Good from './Good';
import Ok from './Ok';
import Bad from './Bad';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
                <Stack.Screen name="Good" component={Good} />
                <Stack.Screen name="Ok" component={Ok} />
                <Stack.Screen name="Bad" component={Bad} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;