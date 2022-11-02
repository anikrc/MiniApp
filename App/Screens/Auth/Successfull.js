//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
// import { COLORS } from '../../Constants/Colors';
import { moderatescale, verticalscale } from '../../PixelRatio';
import Navigation from '../../Service/Navigation'
// create a component
const Successfull = () => {
    const colors = useTheme()
    return (
        <Container
        // style={styles.container}
        >
            <StatusBar
                backgroundColor={colors.backgroundColor}
                barStyle='dark-content'
            />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: moderatescale(15)
                }}>
                <Text
                    style={[styles.TextBold, {
                        color: colors.primaryThemeColor,
                        textAlign: 'center',
                        width: '100%',
                        marginTop: moderatescale(70)
                    }]}
                >
                    Congratulations!
                </Text>

                <Text style={[styles.TextLight, {
                    color: colors.primaryThemeColor, width: '100%',
                }]}>
                    Your Phone Verification has been done successfully!
                </Text>
                <Image
                    source={require('../../Assets/done.png')}
                    style={styles.imgStyle}
                />

                {/* </View> */}
                <AppButton
                    title='Continue'
                    onPress={() => Navigation.navigate('Home')}
                    shadow={true}
                    style={styles.buttonStyle}
                    textStyle={[styles.TextBold, {
                        color: '#fff',
                        fontSize: moderatescale(14),

                    }]}
                />

            </View>
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
        fontSize: moderatescale(14),
        fontWeight: '300',
        textAlign: 'center',
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
    },

    imgStyle: {
        marginVertical: moderatescale(20),

    }
});

//make this component available to the app
export default Successfull;


