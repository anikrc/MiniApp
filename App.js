//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from 'react-native-basic-elements';
import { COLORS } from './App/Constants/Colors';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './App/Navigation/AuthStack';
import Navigation from './App/Service/Navigation';
import AppStack from './App/Navigation/AppStack';
import { useState } from 'react';
import InitialScreen from './App/Screens/Auth/InitialScreen';
import Login from './App/Screens/Auth/Login';
// import { Provider as PaperProvider } from 'react-native-paper';


const Stack = createStackNavigator()
// create a component
const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Theme.Provider
        theme={{
          light: {
            primaryThemeColor: COLORS.primaryThemeColor,
            secondaryThemeColor: '#9D9D9D',
            primaryFontColor: COLORS.primaryFontColor,
            secondaryFontColor: COLORS.secondaryFontColor,
            cardColor: '#fff',
            headerColor: COLORS.backgroundColor,
            pageBackgroundColor: COLORS.backgroundColor,
            tabBarColor: '#fff',
            shadowColor: '#999',
            statusBarStyle: 'dark-content',
            buttonColor: COLORS.ButtonColor,
            borderColor: COLORS.borderColor
          },
          dark: {
            primaryThemeColor: 'black',
            secondaryThemeColor: '#000',
            primaryFontColor: '#fff',
            secondaryFontColor: '#999',
            cardColor: '#000',
            headerColor: '#000',
            pageBackgroundColor: '#0A0A0A',
            tabBarColor: '#000',
            shadowColor: '#1E1E1E',
            statusBarStyle: "light-content",
            buttonColor: '#000',
            borderColor: '#999'
          },
        }}
        // mode={isDark ? 'dark' : 'light'}
        mode={'light'}
      >
        <NavigationContainer
          ref={(r) => Navigation.setTopLevelNavigator(r)}
        >
          <Stack.Navigator
            initialRouteName='AuthStack'
            headerMode="none"

          >
            {/* <Stack.Screen name='AppStack' component={AppStack} /> */}
            <Stack.Screen name='AuthStack' component={AuthStack} />
            {/* <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="Login" component={Login} /> */}
          </Stack.Navigator>
        </NavigationContainer>

      </Theme.Provider>
    </View>

  );
};


//make this component available to the app
export default App;