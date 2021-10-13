import React, {Component} from 'react';
import ActionButton from 'react-native-circular-action-menu';
import {View} from 'react-native';
const CircularButtons = () => {
  return (
    <View style={{ margin:2}}>
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => console.log('notes tapped!')}>
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}>
         
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {}}>
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};
export default CircularButtons;
