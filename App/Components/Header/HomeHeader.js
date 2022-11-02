//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppBar, Container, Icon, useTheme } from 'react-native-basic-elements';
// import { COLORS } from '../../Constants/Colors';
import { moderatescale, verticalscale } from '../../PixelRatio';
import { Switch } from 'react-native-switch';
// create a component
const HomeHeader = () => {
    const colors = useTheme()
    return (
        <View
            style={styles.container}
        >
            <AppBar.Back
                title=''
                icon={{
                    name: 'menu',
                    type: 'Entypo',
                    style: styles.iconStyle,
                    color: colors.primaryThemeColor
                }}
                onLeftIconPress={() => { }}
                titlePosition='left'
                titleStyle={{
                    fontWeight: 'bold'
                }}
                titleType='text'
                shadow={true}
                rightActions={[
                    {
                        icon:
                            <Icon
                                name='switch'
                                type='Entypo'
                                style={[styles.iconStyle,
                                { color: '#9D9D9D' }]}
                            />,
                        onPress: () => console.log("bal")
                        // <Switch
                        //     value={true}
                        //     onValueChange={(val) => console.log(val)}
                        //     disabled={true}
                        //     activeText={'On'}
                        //     inActiveText={'Off'}
                        //     circleSize={30}
                        //     barHeight={3}
                        //     circleBorderWidth={3}
                        //     backgroundActive={'green'}
                        //     backgroundInactive={'blue'}
                        //     circleActiveColor={'red'}
                        //     circleInActiveColor={'#000000'}
                        //     // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                        //     changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                        //     innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                        //     outerCircleStyle={{}} // style for outer animated circle
                        //     renderActiveText={false}
                        //     renderInActiveText={false}
                        //     switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                        //     switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                        //     switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                        //     switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                        // />
                    },
                    {
                        icon: <View style={styles.RoundView}>

                        </View>
                    }
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
        // width: '100%'
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
        fontSize: moderatescale(25),
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
export default HomeHeader;
