import React from 'react';
import { TouchableOpacity ,StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function ReadBtn({book}) {
    const navigation=useNavigation()

    return (
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Reader',book.base64)}>
            <Text style={styles.txtBTN}>Leer</Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    btn:{
        backgroundColor:'#262641',
        width:143,
        height:50,
        borderRadius:15,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        top:-55
      
    },
    txtBTN:{
        color:'white',
        fontWeight:'700',
        fontSize:15,
        alignSelf:'center'
    }

})

export default ReadBtn;