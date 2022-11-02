//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { moderatescale, verticalscale } from '../../PixelRatio';
import { Container, Text } from 'react-native-basic-elements';
import Navigation from '../../Service/Navigation';
const { height, width } = Dimensions.get('window');
// create a component
const BookCard = (props) => {
    return (
        <TouchableOpacity style={styles.imgViewStyle}
            onPress={() => { Navigation.navigate('BookBanner', { item: props.item }) }}
        >
            <Image
                source={{ uri: props.item.image }}
                style={styles.imgStyle}
            />
            <Text.Heading
                style={styles.TextBold}
                title={props.item.title}
            />
            <Text.SubHeading
                style={{ marginHorizontal: moderatescale(5) }}
                title={props.item.name}
            />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    imgViewStyle: {
        // height: verticalscale(270),
        width: width / 2.6,
        // resizeMode: 'cover',
        marginHorizontal: moderatescale(5),
        // borderRadius: moderatescale(10)
    },
    imgStyle: {
        height: verticalscale(230),
        width: '100%',
        resizeMode: 'cover',
        // marginHorizontal: moderatescale(5),
        borderRadius: moderatescale(10)
    },
    TextBold: {
        fontSize: moderatescale(13),
        fontWeight: 'bold',
        margin: moderatescale(5),
        width: '100%'
    }
});

//make this component available to the app
export default BookCard;
