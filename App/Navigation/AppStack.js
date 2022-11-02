import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../Constants/Colors';
import Home from '../Screens/HomeScreen/Home';

const Stack = createStackNavigator();

function AppStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerMode="none"
            screenOptions={{
                cardStyle: { backgroundColor: COLORS.black },
                gestureEnabled: true,
                backgroundColor: COLORS.black,
                gestureDirection: 'horizontal',
                ...TransitionPresets.SlideFromRightIOS,
            }}>
            <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
    );
}

export default AppStack;
