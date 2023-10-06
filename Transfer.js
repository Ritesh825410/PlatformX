import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Share, 
    Alert
  } from 'react-native';
const Transfer = () =>{
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
    } catch (error) {
      Alert.alert(error.message);
    }
    };
    
    
    return (
      <View style={{flex:4}}>
        <TouchableOpacity style={{alignItems: 'center', backgroundColor:'blue',padding:25, marginLeft:50, marginEnd:10}} onPress={onShare}>
          
        </TouchableOpacity>
     
      </View>
     
  
    );
  }
  
  
  export default Transfer;
  