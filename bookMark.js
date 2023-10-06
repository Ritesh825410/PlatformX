
import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Pressable,
    Text
} from 'react-native';
const BookMark = () => {
    const [no,book]=useState(2)
    return (
        <View style={styles.main}>

            <Pressable style={styles.pressableBtn}
                onPress={() => book(1)
                } >
                {
                  no===1 ?<View style={styles.bgc}></View>:null
                }
              
            </Pressable>

        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
    },
    pressableBtn: {
        height: 60,
        borderWidth: 2,
        width: 60,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 300,
        marginTop:40
    },
    bgc: {
        backgroundColor: 'red',
        height: 54,
        width: 50,
        marginLeft:1,
        borderRadius:27
    }
})

export default BookMark;
