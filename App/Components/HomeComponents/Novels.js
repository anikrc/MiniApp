//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { Container, Text } from 'react-native-basic-elements';
import { moderatescale, verticalscale } from '../../PixelRatio';
import BookCard from '../CardDesign/BookCard';
const { height, width } = Dimensions.get('window');
const data = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_QuVMC4mSXxfz3QZIcblsgUYO4Fmp9x7ZZNdOJ0p5jVmvPzVZoCwKMasEL3uBB88R8w&usqp=CAU",
        title: "Regretting YOU",
        name: "Roald Dahl"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_QuVMC4mSXxfz3QZIcblsgUYO4Fmp9x7ZZNdOJ0p5jVmvPzVZoCwKMasEL3uBB88R8w&usqp=CAU",
        title: "Regretting YOU",
        name: "Roald Dahl"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_QuVMC4mSXxfz3QZIcblsgUYO4Fmp9x7ZZNdOJ0p5jVmvPzVZoCwKMasEL3uBB88R8w&usqp=CAU",
        title: "Regretting YOU",
        name: "Roald Dahl"
    }
]
const Novels = () => {
    return (
        <Container>
            <ScrollView>
                <FlatList
                    data={data}
                    key={'#'}
                    keyExtractor={(item, index) => index}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
                    showsVerticalScrollIndicator={false}
                    style={{ padding: 10, marginVertical: moderatescale(5) }}
                    // numColumn={3}

                    renderItem={({ item }) => {
                        console.log('item>>', item)
                        return (
                            <BookCard item={item} />
                        )
                    }} />
                <Text.Heading
                    style={styles.TextBold}
                    title="New Arrivals"
                />

                <FlatList
                    data={data}
                    // key={'#'}
                    keyExtractor={(item, index) => index}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
                    showsVerticalScrollIndicator={false}
                    style={{ padding: 10, marginVertical: moderatescale(5) }}
                    // numColumn={3}

                    renderItem={({ item }) => {
                        console.log('item>>', item)
                        return (
                            <BookCard item={item} />
                        )
                    }} />
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
        fontSize: moderatescale(20),
        fontWeight: 'bold',
        marginHorizontal: moderatescale(15),
        // marginVertical: moderatescale(10)
    }
});

//make this component available to the app
export default Novels;
