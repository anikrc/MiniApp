//import liraries
import React, { Component } from 'react';
import { useRef } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { AppButton, Container, StatusBar, Text } from 'react-native-basic-elements';
import Swiper from 'react-native-swiper'
import { COLORS } from '../../Constants/Colors';
import { moderatescale, verticalscale } from '../../PixelRatio';
import Navigation from '../../Service/Navigation'
const { height, width } = Dimensions.get('window');
// create a component
const Data = [
    {
        // flex: 1,
        image: "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
        // height: height / 2,
        Title: 'Listen to Audio books',
        TitleDes: 'Read, Listen, or Watch a book. All in one place, read any book, wherever you go.',
        // backgroundColor: '#9DD6EB'
    },
    {
        // flex: 1,
        image: "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
        // height: height / 2,
        Title: 'Read Ebooks',
        TitleDes: 'Read, Listen, or Watch a book. All in one place, read any book, wherever you go.',
        // backgroundColor: '#9DD6EB'
    },
    {
        // flex: 1,
        // height: height / 2,
        image: "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
        Title: 'Watch Video books',
        TitleDes: 'Read, Listen, or Watch a book. All in one place, read any book, wherever you go.',
        // backgroundColor: '#9DD6EB'
    },
    {
        // flex: 1,
        // height: height / 2,
        image: "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
        Title: 'Awesome Support 24/7',
        TitleDes: 'You got any issues? Well, we have got you covered with the best Support of BookWorms? Platform.',
        // backgroundColor: '#9DD6EB'
    },
    {
        // flex: 1,
        // height: height / 2,
        image: "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
        Title: '60+ Categories of Books',
        TitleDes: 'More than 60 Genres or Categories of books are available in Ebook, Audio, Video formats.',
        // backgroundColor: '#9DD6EB'
    },
    {
        // flex: 1,
        // height: height / 2,
        image: "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
        Title: 'Chat with a friend, suggest?him/her a book you read.',
        TitleDes: 'You can start chatting with a friend via reference ID number.',
        // backgroundColor: '#9DD6EB'
    },
    {
        // flex: 1,
        // height: height / 2,
        image: "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
        Title: 'Add Multiple Credit Cards',
        TitleDes: 'You can multiple cards in your account to user and manage them.',
        // backgroundColor: '#9DD6EB'
    },
]
const InitialScreen = () => {

    const myref = useRef()
    return (
        // <View style={styles.container}>
        //     <Text>InitialScreen</Text>
        // </View>
        <Container
        //  style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.backgroundColor}
                barStyle='dark-content'
            />
            <View style={{ height: '75%' }}>
                <Swiper
                    ref={myref}
                    dotStyle={{
                        backgroundColor: 'grey',
                        width: 15
                        // position: 'absolute'
                    }}
                    activeDotStyle={{
                        width: 15,
                        backgroundColor: '#D45555'
                    }}
                    paginationStyle={{
                        bottom: 200,
                        left: 20,
                        // right: 10
                    }}
                    // index = {images.length}
                    loop={true}
                    showsPagination={true}
                    // activeDotColor='#FFF'
                    // pagingEnabled = {false}
                    removeClippedSubviews={false}
                    //   borderRadius={10}
                    autoplay={true}
                // autoplayTimeout={5}
                >
                    {Data.map((item) => {
                        return (
                            <View style={{ height: '100%' }}>
                                <Image

                                    source={{ uri: item.image }}
                                    style={{ height: '75%', width: '100%' }}
                                    resizeMode="cover"
                                />
                                <Text.Heading
                                    style={styles.TextBold}
                                    title={item.Title}
                                />
                                <Text.SubHeading
                                    style={styles.TextLight}
                                    title={item.TitleDes}
                                />
                                {/* <Text.Heading
                                style={{ color: 'red' }}
                            >
                                {item.Title}
                            </Text.Heading> */}
                            </View>
                        );
                    })}
                </Swiper>
            </View>
            <View style={{
                height: '25%',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'flex-start',
                // borderWidth: 4
            }}>
                <AppButton
                    title='Login'
                    onPress={() => Navigation.navigate('Login')}
                    shadow={true}
                    style={styles.buttonStyle}
                    textStyle={[styles.TextBold, { color: '#fff', fontSize: moderatescale(14) }]}
                />
                <AppButton
                    title='Sign Up'
                    // onPress={onChange}
                    shadow={true}
                    style={styles.buttonStyle}
                    textStyle={[styles.TextBold, { color: '#fff', fontSize: moderatescale(14) }]}
                />
            </View>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: COLORS.backgroundColor,
    },
    TextBold: {
        fontSize: moderatescale(18),
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: moderatescale(8)
    },
    TextLight: {
        // fontSize: moderatescale(18),
        fontWeight: '300',
        textAlign: 'center',
        width: '90%',
        alignSelf: 'center',
        marginVertical: moderatescale(8)
    },
    buttonStyle: {
        // marginTop: 10,
        width: '50%',
        height: verticalscale(40),
        // paddingVertical: moderatescale(10),
        backgroundColor: COLORS.ButtonColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderatescale(10)
    }
});

//make this component available to the app
export default InitialScreen;
