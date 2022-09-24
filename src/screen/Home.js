import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ListItem from '../components/ListItem';
import { books } from '../const/books';

function Home({navigation}) {
   
    return (

        <>

            <View style={styles.home}>
                <Text style={styles.title}>Alpha Books</Text>
                <ScrollView style={styles.list}>

                    {books.map(item => {
                        return (
                            <ListItem book={item} navigation={navigation}/>
                        )
                    })

                    }

                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    list: {

        height: '85%',
        marginTop:'25%',
        alignSelf: 'center'

    },
    home: {
        alignContent: 'center',
        flexDirection: 'row',
        flex: 1,
       
    },
    title: {
        color: 'black',
        position:'absolute',
        fontWeight:'700',
        top:20,
        left:30,
        fontSize:30


    }

})

export default Home;