import React from 'react';
import { View, Image, StyleSheet,Text, TouchableOpacity } from 'react-native';
import FavoriteButton from './FavoriteButton';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({book}) => {
    const navigation=useNavigation()
    return (
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Details',book)}>
            <Image   
                source={{uri:book.cover}}
                style={{width: 80, height: 112}}
            
            />
            <View style={styles.textSection}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.subtitle}>{book.author}</Text>
            </View>
           
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    textSection:{
        alignSelf:'center',
        marginLeft:20,
       
        maxWidth:200
    },
    item:{
        flexDirection:'row',
        marginBottom:20,
        marginLeft:30,
        
    },
    title:{
        color:"black",
        fontWeight:'700',
        fontSize:15
    },
    subtitle:{
        color:'#838D95'
    }
})

export default ListItem;