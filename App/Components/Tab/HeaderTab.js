//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import Novels from '../HomeComponents/Novels';
import Romance from '../HomeComponents/Romance';
import Science from '../HomeComponents/Science';
import SelfLove from '../HomeComponents/SelfLove';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'react-native-basic-elements';
import { moderatescale } from '../../PixelRatio';
const Tab = createMaterialTopTabNavigator();
// create a component
const HeaderTab = () => {
    const colors = useTheme()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.pageBackgroundColor,
                },
                tabBarActiveTintColor: colors.primaryThemeColor,
                tabBarInactiveTintColor: colors.secondaryFontColor,
                tabBarLabelStyle: {
                    // fontFamily:  FONTS.medium,
                    fontSize: moderatescale(10),

                },
                tabBarScrollEnabled: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primaryThemeColor,
                },
                tabBarItemStyle: {
                    width: 130
                },
            }}

            style={{
                marginTop: 20,
            }}
        >
            <Tab.Screen name="Novels" component={Novels} />
            <Tab.Screen name="Self Love" component={SelfLove} />
            <Tab.Screen name="Science" component={Science} />
            <Tab.Screen name="Romance" component={Romance} />
            {/* <Tab.Screen name="Romance" component={Romance} /> */}
        </Tab.Navigator>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HeaderTab;
