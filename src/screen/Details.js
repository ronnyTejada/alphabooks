import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ReadBtn from '../components/ReadBtn';

function Details({ route }) {
    const book = route.params
    return (
        <View style={styles.main}>
            <View style={styles.sectionOne}>
                <Image
                    source={{ uri: book.cover }}
                    style={styles.cover}

                />
            </View>
            <View style={styles.sectionTwo}>
                <Text style={styles.author}>{book.author}</Text>
                <Text style={styles.title}>{book.title}</Text>

                <View>
                    <Text style={{ color: 'black' }}>{book.resumen}</Text>
                </View>
             
            </View>
            <ReadBtn book={book}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    sectionOne: {
        backgroundColor: 'white',
        height: '50%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center'
    },
    sectionTwo: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '50%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
       
    },
    main: {
        flex: 1,
        height: '100%',
        backgroundColor: '#F1F5F9'
    },
    cover: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        width: 150,
        height: 220,
        alignSelf: 'center',
    },
    author: {
        fontWeight: '700',
        fontSize: 18
    },
    title: {
        color: 'black',
        fontWeight: '700',
        fontSize: 25
    }
})


export default Details;