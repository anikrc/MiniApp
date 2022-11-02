//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { AppTextInput, Container, Icon, useTheme } from 'react-native-basic-elements';
import HomeHeader from '../../Components/Header/HomeHeader';
import { COLORS } from '../../Constants/Colors';
import { moderatescale, verticalscale } from '../../PixelRatio';
import HeaderTab from '../../Components/Tab/HeaderTab';
// create a component
const Home = () => {
    const colors = useTheme()
    return (
        <>
            <HomeHeader />
            <Container style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {/* <Text>Home</Text> */}

                    <Text style={[styles.TextLight, {
                        color: colors.secondaryFontColor,
                        marginHorizontal: moderatescale(15)
                    }]}>
                        Welcome back, Shawn!
                    </Text>
                    <Text style={[styles.TextBold, {
                        color: COLORS.primaryFontColor,
                        marginHorizontal: moderatescale(15),
                        fontSize: moderatescale(20)
                    }]}>
                        So, what are we reading {'\n'}
                        today?
                    </Text>

                    <AppTextInput
                        // keyboardType='email-address'
                        placeholder="Search"
                        inputStyle={{
                            fontSize: 15,
                            height: verticalscale(40),
                        }}
                        leftIcon={{
                            name: 'search1',
                            type: 'AntDesign',
                            color: colors.secondaryFontColor
                        }}
                        inputContainerStyle={{
                            width: '92%',
                            backgroundColor: colors.borderColor,
                            alignSelf: 'center',
                            // height: 50
                            // shadowColor: colors.shadowColor

                        }}
                    />
                    {/* </View> */}

                    <HeaderTab />
                </ScrollView>
            </Container>
        </>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: COLORS.backgroundColor,
        // padding: moderatescale(15)
    },
    TextBold: {
        fontSize: moderatescale(25),
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: moderatescale(8),
    },
    TextLight: {
        fontSize: moderatescale(12),
        fontWeight: '600',
        // textAlign: 'center',
        // width: '92%',
        // alignSelf: 'center',
        marginVertical: moderatescale(8),
        // width: '92%'
    },
    SearchStyle: {
        height: verticalscale(40),
        width: '92%',
        borderWidth: 1,
        marginVertical: moderatescale(10),
        // marginHorizontal: moderatescale(15),
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    iconStyle: {
        fontSize: moderatescale(16),

    },
    InputStyle: {
        flex: 1,
        paddingHorizontal: 10
    }
});

//make this component available to the app
export default Home;
