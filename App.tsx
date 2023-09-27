import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Share, 
  Alert
} from 'react-native';
function App(): JSX.Element {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  
  
  return (
    <View style={{flex:4}}>
      <Text style={{fontSize:100, backgroundColor:'red', textAlign:'center',color:'white'}}>Share Button</Text>
      <TouchableOpacity style={{marginTop:30,alignItems: 'center', backgroundColor:'blue',padding:25, marginLeft:50, marginEnd:50}} onPress={onShare}>
        <Text style={{fontSize:55,fontWeight: '500',color:'white'}}>Share</Text>
      </TouchableOpacity>
   
    </View>
   

  );
}


export default App;
