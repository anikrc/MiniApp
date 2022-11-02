//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppBar, Container, Icon, useTheme } from 'react-native-basic-elements';
// import { COLORS } from '../../Constants/Colors';
import { moderatescale, verticalscale } from '../../PixelRatio';
import { Switch } from 'react-native-switch';
// create a component
const BackHeader = () => {
    const colors = useTheme()
    return (
        <View
            style={styles.container}
        >
            <AppBar.Back
                title='The Singing Trees'
                icon={{
                    name: 'arrowleft',
                    type: 'AntDesign',
                    style: styles.iconStyle,
                    // color: '#000'
                }}
                onLeftIconPress={() => { }}
                titlePosition='middle'
                titleStyle={{
                    fontWeight: 'bold'
                }}
                titleType='text'
                shadow={true}
                rightActions={[
                    {
                        icon:
                            <Icon
                                name='more-vert'
                                type='MaterialIcon'
                                style={styles.iconStyle}
                            />,
                        onPress: () => console.log("bal")

                    },

                ]}
            />
            {/* <View style={styles.HeaderStyle}>
                <Icon
                    name='menu' type='Entypo' style={styles.iconStyle}
                />
                <View style={styles.SubHeaderStyle}>
                    <Icon
                        name='switch' type='Entypo'
                        style={[styles.iconStyle, { color: '#9D9D9D' }]}
                    />
                    <View style={styles.RoundView}>

                    </View>
                </View>
            </View> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: COLORS.backgroundColor,
        // paddingHorizontal: moderatescale(15)
        // width: '100%',
        paddingHorizontal: moderatescale(5)
    },
    HeaderStyle: {
        height: verticalscale(50),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: moderatescale(15)

    },
    iconStyle: {
        fontSize: moderatescale(20),
        // color: COLORS.primaryThemeColor
    },
    SubHeaderStyle: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    RoundView: {
        height: moderatescale(26),
        width: moderatescale(26),
        borderRadius: moderatescale(13),
        backgroundColor: 'red',
        marginHorizontal: moderatescale(10)
    }
});

//make this component available to the app
export default BackHeader;
