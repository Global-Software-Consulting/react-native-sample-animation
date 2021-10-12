import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const Square = () => {
  const [translation, setTranslation] = useState(0);
  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        setTranslation(i);
      }, 25 * i);
    }
  }, []);
  return (
    <View
      style={{
        height: 100,
        width: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'orange',
        transform: [{translateX: translation}],
      }}>
      <Text>Square with useEffect</Text>
    </View>
  );
};
export default Square;
