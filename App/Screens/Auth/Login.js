//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
// import { COLORS } from '../../Constants/Colors';
import { moderatescale, verticalscale } from '../../PixelRatio';
import Navigation from '../../Service/Navigation'
// create a component
const Login = () => {
    const colors = useTheme()
    return (
        <Container
        >
            <StatusBar
                backgroundColor={colors.backgroundColor}
                barStyle='dark-content'
            />
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    // width: '92%',
                    // alignSelf: 'center',
                    flexGrow: 1,
                    // justifyContent: 'center',
                    // alignItems: 'center'
                    paddingHorizontal: moderatescale(15)
                }}>
                <Text.Heading
                    style={[styles.TextBold, {
                        color: colors.primaryThemeColor,
                        alignSelf: 'flex-start',
                        width: '100%',
                        marginTop: moderatescale(70)
                    }]}
                    title='Login'
                />
                <View style={{ flex: 1, marginVertical: moderatescale(15) }}>
                    <AppTextInput
                        keyboardType='email-address'
                        placeholder="Email"
                        inputStyle={{
                            // fontFamily: FONTS.regular,
                            fontSize: 15,
                            // width: '100%',
                            // backgroundColor: 'red',
                            height: verticalscale(50),
                            // backgroundColor: COLORS.white,
                            borderRadius: 30,
                            paddingHorizontal: 25
                        }}
                        inputContainerStyle={{
                            borderRadius: 30,
                            // paddingHorizontal: 10,
                            // width: '100%',
                            marginVertical: moderatescale(15),
                            // borderColor: COLORS.borderColor,
                            alignSelf: 'center',
                            elevation: 5,
                            backgroundColor: colors.pageBackgroundColor

                        }}
                    />
                    <AppTextInput
                        keyboardType='visible-password'
                        placeholder="Password"

                        inputStyle={{
                            // fontFamily: FONTS.regular,
                            fontSize: 15,
                            // width: '100%',
                            // backgroundColor: 'red',
                            height: verticalscale(50),
                            // backgroundColor: COLORS.white,
                            borderRadius: 30,
                            paddingHorizontal: 25,
                            // fontWeight: '600'

                        }}
                        inputContainerStyle={{
                            borderRadius: 30,
                            marginVertical: moderatescale(15),
                            // paddingHorizontal: 10,
                            // width: '100%',
                            // borderColor: COLORS.borderColor,
                            alignSelf: 'center',
                            elevation: 5,
                            backgroundColor: colors.pageBackgroundColor
                        }}
                    />

                    <AppButton
                        title='Login'
                        onPress={() => Navigation.navigate('SignUp')}
                        shadow={true}
                        style={styles.buttonStyle}
                        textStyle={[styles.TextBold, {
                            color: '#fff',
                            fontSize: moderatescale(14),

                        }]}
                    />

                    <View style={{
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                        <Icon
                            name='checkcircle'
                            type='AntDesign'
                            color={colors.primaryThemeColor}
                        // style={{ marginHorizontal: 5 }}
                        />
                        <Text style={[styles.TextLight, {
                            color: colors.secondaryFontColor, width: '90%'
                        }]}>

                            I agree to {' '}
                            <Text style={styles.TextLight}>
                                Terms & Conditions {' '}
                            </Text>
                            <Text style={[styles.TextLight, { color: colors.secondaryFontColor }]}>
                                and {' '}
                            </Text>

                            <Text style={styles.TextLight}>
                                Privacy Policy {' '}
                            </Text>
                            <Text style={[styles.TextLight, { color: colors.secondaryFontColor }]}>
                                of {' '}
                            </Text>
                            <Text style={styles.TextLight}>
                                BookWorms. {' '}
                            </Text>
                        </Text>




                    </View>
                </View>

                <Text style={[styles.TextLight, { color: colors.secondaryFontColor }]}>

                    Don’t have an account?{' '}
                    <Text style={[styles.TextLight, { color: colors.primaryThemeColor }]}>
                        Sign Up
                    </Text>

                </Text>
            </KeyboardAwareScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: COLORS.backgroundColor,
    //     padding: moderatescale(15)
    // },
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
        alignSelf: 'center',
        marginVertical: moderatescale(8),
        // width: '92%'
    },
    buttonStyle: {
        // marginTop: 10,
        width: '100%',
        height: verticalscale(50),
        // paddingVertical: moderatescale(10),
        // backgroundColor: COLORS.ButtonColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderatescale(20),
        borderRadius: 30,
        alignSelf: 'center'
    }
});

//make this component available to the app
export default Login;
