import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../Constants/Colors';
import InitialScreen from '../Screens/Auth/InitialScreen';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import PhVerification from '../Screens/Auth/PhVerification';
import CreaditCard from '../Screens/Auth/CreaditCard';
import Successfull from '../Screens/Auth/Successfull';
import Home from '../Screens/HomeScreen/Home';
import BookBanner from '../Screens/Books/BookBanner';
import BookSingle from '../Screens/Books/BookSingle';
import BooksPage from '../Screens/Books/BooksPage';

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="InitialScreen"
            headerMode="none"
            screenOptions={{
                cardStyle: { backgroundColor: COLORS.black },
                gestureEnabled: true,
                backgroundColor: COLORS.black,
                gestureDirection: 'horizontal',
                ...TransitionPresets.SlideFromRightIOS,
            }}>
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="PhVerification" component={PhVerification} />
            <Stack.Screen name="CreaditCard" component={CreaditCard} />
            <Stack.Screen name="Successfull" component={Successfull} />
            {/* Appstack */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BookBanner" component={BookBanner} />
            <Stack.Screen name="BookSingle" component={BookSingle} />
            <Stack.Screen name="BooksPage" component={BooksPage} />
        </Stack.Navigator>
    );
}

export default AuthStack;
