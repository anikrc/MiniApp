//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Container } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
// import HTMLView from 'react-native-htmlview';
import { moderatescale } from '../../PixelRatio';
// create a component
const BooksPage = () => {
    // const [allData, setData] = useState({});
    return (
        <Container
        // style={styles.container}
        >
            <BackHeader />
            <View>
                <ScrollView contentContainerStyle={{
                    paddingHorizontal: moderatescale(16),
                    // height: '70%',
                    flexGrow: 1,
                    borderWidth: 1
                }}>
                    {/* <HTMLView
                            value={allData.row}
                            stylesheet={styles}
                        /> */}
                    <Text style={{ fontSize: moderatescale(14), marginVertical: moderatescale(10) }}>
                        Pencey  is   Holden’s  fourth  school;
                        he has already failed out of three others.
                        At  Pencey, he has  failed four  out  of  five of  his
                        classes and  has  received notice   that   he is   being expelled,
                        but  he  is  not scheduled  to return home  to
                        Manhattan  until  Wedne-sday.
                        He visits his  elderly history teacher,
                        Spencer, to say   goodbye,
                        but    when  Spencer  tries  to reprimand him
                        for his poor  academic perfo rm ance,
                        Holden becomes annoyed.
                        Back in the dorm itory,
                        Holden is further  irritated by his unhygienic neighbor,
                        Ackley, and by his own  roommate,  Strad later.
                        Pencey  is   Holden’s  fourth  school;
                        he has already failed out of three others.
                        At  Pencey, he has  failed four  out  of  five of  his
                        classes and  has  received notice   that   he is   being expelled,
                        but  he  is  not scheduled  to return home  to
                        Manhattan  until  Wedne-sday.
                        He visits his  elderly history teacher,
                        Spencer, to say   goodbye,
                        but    when  Spencer  tries  to reprimand him
                        for his poor  academic perfo rm ance,
                        Holden becomes annoyed.
                        Back in the dorm itory,
                        Holden is further  irritated by his unhygienic neighbor,
                        Ackley, and by his own  roommate,  Strad later.
                    </Text>
                    <Text style={{ fontSize: moderatescale(14), marginVertical: moderatescale(10) }}>
                        Stradlater  spends   the  evening   on a
                        date with   Jane  Gallagher,
                        a   girl  whom  Holden used  to  date
                        and  whom  he   still  admires.
                        During  the   course  of  the   evening,
                        Holden grows increasingly nervous about Stradlater ’s
                        taking   Jane   out,   and   when Stradlater returns,
                        Holden   questions   him  insist ently
                        about whether he tried to  have sex with her.
                        Stradlater   teases  Holden,
                        who  flies  into  a rage and attacks  Stradlater.
                        Stradlater pins Holden down and  bloodies his nose.
                        Holden decides   that  he’s  enough  of
                        Pencey  and  will goand bloodies his nose.
                        Holden decides that  he’s  enough  of  Pencey
                        and  will go and  bloodies his nose.
                        Holden decides  that  he’s
                        enough  of  Pencey  and  will go
                    </Text>
                </ScrollView>
            </View>
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
});

//make this component available to the app
export default BooksPage;
