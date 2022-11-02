//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Card, Container, Icon, useTheme, Text, StatusBar } from 'react-native-basic-elements';
import { moderatescale, verticalscale } from '../../PixelRatio';
import Navigation from '../../Service/Navigation';
const { height, width } = Dimensions.get('window');
// create a component
const BookSingle = (props) => {
    const colors = useTheme()
    const item = props.route.params.item
    return (
        <Container
        //  style={styles.container}
        >
            <StatusBar
                backgroundColor={"#FF8000"}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ImageBackground
                    source={{ uri: item.image }}
                    resizeMode="stretch"
                    borderBottomLeftRadius={38}
                    borderBottomRightRadius={38}
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
                </ImageBackground>
                <View
                    style={{
                        // flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                        padding: moderatescale(8),

                    }}>
                    <View>
                        <Text.Heading
                            style={[styles.TextBold, { marginHorizontal: moderatescale(15), }]}
                            title="The Singing  Trees"
                        />
                        <Text.SubHeading
                            style={{
                                marginHorizontal: moderatescale(15),
                                marginVertical: moderatescale(3),
                                fontSize: moderatescale(11)
                            }}
                            title="Boo Walker"
                        />
                        <View style={{ marginHorizontal: moderatescale(15) }}>
                            <Text style={{ fontSize: moderatescale(12) }}>
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
                                {' '}4.0
                            </Text>
                            <Text.Heading
                                style={[styles.TextBold, { marginVertical: moderatescale(10) }]}
                                title="About the author"
                            />
                            <Text.SubHeading
                                style={{
                                    // marginHorizontal: moderatescale(15),
                                    marginVertical: moderatescale(1),
                                    fontSize: moderatescale(11)
                                }}
                                title="Boo Walker was an American writer,
                         best known for his 1951 novel The Singing Trees.
                          Before it’s publication,
                           Walker published several short stories in Story magazine"
                            />

                            <Text.Heading
                                style={[styles.TextBold, { marginVertical: moderatescale(10) }]}
                                title="Overview"
                            />
                            <Text.SubHeading
                                style={{
                                    // marginHorizontal: moderatescale(15),
                                    marginVertical: moderatescale(1),
                                    fontSize: moderatescale(11)
                                }}
                                title="The Singing Trees is a novel by Boo Walker,
                         partially published in serial form in 1945–1946 and as a novel in 1951.
                          It was originally intended for adu lts but is
                           often read by adolescents for its theme of angst, alienation and as a critique......"
                            />
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: moderatescale(10),
                        paddingHorizontal: moderatescale(15)
                    }}>
                        <TouchableOpacity
                            style={[styles.ButtonStyle, {
                                backgroundColor: colors.buttonColor
                            }]}
                            onPress={() => Navigation.navigate('BooksPage')}
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
            </ScrollView>
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
        height: height / 2,
        width: '100%',
        justifyContent: 'space-between',
        // borderBottomLeftRadius: 30
        // borderRadius: 50,
        // borderWidth: 1
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
        fontSize: moderatescale(16),
        fontWeight: 'bold',
        // marginHorizontal: moderatescale(15),
        // marginVertical: moderatescale(10)
    },
    curvView: {
        height: verticalscale(40),
        // paddingh
        borderRadius: moderatescale(15),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10
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
export default BookSingle;
