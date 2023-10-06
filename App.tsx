import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Transfer from './Transfer.js';
import BookMark from './bookMark.js'

function App(): JSX.Element {

  return (
    <View style={{ marginTop: 600}}>
      
      <View style={{flexDirection:'row',alignContent:'flex-end'}}>
        <View>
        <Ionicons name='play-circle' color={'white'} size={56} />
        <Text>Clock Icon</Text>
        </View>
        <View>
        <Text>8 min</Text>
        </View>
      <View>
        <Transfer />
      </View>
        <View>
        <BookMark />
      </View>
      </View>
    </View>


  );
}


export default App;
