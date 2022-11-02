//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Card, Container, Icon, useTheme, Text, StatusBar } from 'react-native-basic-elements';
import { moderatescale, verticalscale } from '../../PixelRatio';
import Navigation from '../../Service/Navigation';

// create a component
const BookBanner = (props) => {
    const colors = useTheme()
    const item = props.route.params.item
    return (
        <Container
        //  style={styles.container}
        >
            <StatusBar
                backgroundColor={"#FF8000"}
            />
            <ImageBackground
                source={{ uri: item.image }}
                resizeMode="stretch"
                style={styles.imageStyle}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity style={[styles.RoundView, {
                        backgroundColor: colors.cardColor,
                        elevation: 5,

                    }]}
                        onPress={() => { Navigation.back() }}
                    >
                        <Icon
                            name='arrowleft'
                            type='AntDesign'
                        />
                    </TouchableOpacity>
                    <View style={[styles.RoundView, {
                        backgroundColor: colors.cardColor,
                        elevation: 5,

                    }]}>
                        <Icon
                            name='bookmark'
                            type='FontAwesome'
                            color={colors.buttonColor}
                        />
                    </View>
                </View>
                <View style={styles.FooterStyle}>
                    <Card style={{
                        paddingHorizontal: moderatescale(15),
                        borderRadius: moderatescale(20)
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <Text.Heading
                                style={[styles.TextBold, { maxWidth: 160 }]}
                                title="The Singing  Trees"
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <Text>
                                    <Icon
                                        name='star'
                                        type='AntDesign'
                                        color="#FFD700"
                                    />
                                    <Icon
                                        name='star'
                                        type='AntDesign'
                                        color="#FFD700"
                                    />
                                    <Icon
                                        name='star'
                                        type='AntDesign'
                                        color="#FFD700"
                                    />
                                    <Icon
                                        name='star'
                                        type='AntDesign'
                                        color="#FFD700"
                                    />
                                    4.0
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <Text.SubHeading
                                style={{ marginHorizontal: moderatescale(15), marginVertical: moderatescale(10) }}
                                title="Boo Walker"
                            />
                            <View style={[styles.curvView, { backgroundColor: colors.buttonColor }]}>
                                <Text
                                    style={[styles.TextBold,
                                    { color: '#fff', fontSize: moderatescale(15) }]}
                                >
                                    $12.00
                                </Text>
                            </View>
                        </View>
                    </Card>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: moderatescale(10)

                    }}>
                        <TouchableOpacity
                            style={[styles.ButtonStyle, {
                                backgroundColor: colors.buttonColor
                            }]}
                            onPress={() => { Navigation.navigate('BookSingle', { item: item }) }}
                        >
                            <Text
                                style={[styles.TextBold,
                                { color: colors.cardColor, fontSize: moderatescale(10) }]}
                            >
                                Read Previews
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.ButtonStyle, {
                                backgroundColor: "#FFCE31"
                            }]}
                        >
                            <Text
                                style={[styles.TextBold,
                                { color: colors.primaryFontColor, fontSize: moderatescale(10) }]}
                            >
                                Buy for $14.00
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

        </Container>
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
    imageStyle: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between'
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: moderatescale(15)
    },
    RoundView: {
        height: moderatescale(40),
        width: moderatescale(40),
        borderRadius: moderatescale(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    FooterStyle: {
        margin: moderatescale(15)
    },
    TextBold: {
        fontSize: moderatescale(18),
        fontWeight: 'bold',
        marginHorizontal: moderatescale(15),
        // marginVertical: moderatescale(10)
    },
    curvView: {
        height: verticalscale(40),
        // paddingh
        borderRadius: moderatescale(15),
        alignItems: 'center',
        justifyContent: 'center',
        // bottom: 10
        // borderRadius: moderatescale(10)

    },
    ButtonStyle: {
        height: verticalscale(40),
        width: '49%',
        // backgroundColor: 'red',
        borderRadius: moderatescale(10),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//make this component available to the app
export default BookBanner;
