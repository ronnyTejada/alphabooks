import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
//import  Favorite  from '../../assets/svg/favorite.svg';

function FavoriteButton({ book }) {

    const navigation=useNavigation()

    return (
        <TouchableOpacity style={styles.open} onPress={()=>navigation.navigate('Details',book)}>

            <Text style={{ color: 'black', textDecorationLine: 'underline' }}>Abrir Libro</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    open: {
        position: 'absolute',
        left: 100,
        bottom: 10
    }
})

export default FavoriteButton;