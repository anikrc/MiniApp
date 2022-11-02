//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
// import { COLORS } from '../../Constants/Colors';
import { moderatescale, verticalscale } from '../../PixelRatio';
import Navigation from '../../Service/Navigation'
// create a component
const CreaditCard = () => {
    const colors = useTheme()
    return (
        <Container
        // style={styles.container}
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
                {/* <Text.Heading
                    style={[styles.TextBold, {
                        color: COLORS.primaryThemeColor,
                        alignSelf: 'flex-start',
                        width: '100%',
                        marginTop: moderatescale(70)
                    }]}
                    title='Login'
                /> */}
                <Text
                    style={[styles.TextBold, {
                        color: colors.primaryThemeColor,
                        alignSelf: 'flex-start',
                        width: '100%',
                        marginTop: moderatescale(70)
                    }]}
                >
                    Add a  {'\n'}
                    Credit Card
                </Text>
                <View style={{ flex: 1, marginVertical: moderatescale(15) }}>
                    <View style={{
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                        <Text style={[styles.TextLight, {
                            color: colors.primaryThemeColor, width: '100%',
                        }]}>
                            Please, enter your card number.
                        </Text>




                    </View>
                    <AppTextInput
                        keyboardType='decimal-pad'
                        placeholder="Credit Card Number"
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


                    <AppButton
                        title='Confirm'
                        onPress={() => Navigation.navigate('Successfull')}
                        shadow={true}
                        style={styles.buttonStyle}
                        textStyle={[styles.TextBold, {
                            color: '#fff',
                            fontSize: moderatescale(14),

                        }]}
                    />


                </View>


            </KeyboardAwareScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
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
export default CreaditCard;


