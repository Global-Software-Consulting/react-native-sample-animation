import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Text, Easing} from 'react-native';

const SquareScale = () => {

  const translation = new Animated.Value(0)
  const translationValue =  translation.interpolate ({
    inputRange :  [ 0, 1 ],
    outputRange :  [ 1, 2 ]
    } )

  // useEffect(() => {
  //   for (let i = 0; i < 50; i++) {
  //     setTimeout(() => {
  //       translation.setValue(i);
  //     }, 25 * i);
  //   }
  // }, []);
  useEffect(() => {
    Animated.timing(translation, {
      toValue: 1,
      duration:3000, 

      useNativeDriver: true,
    }).start();
  }, []);

  // useEffect(() => {
  //   Animated.sequence([
  //     Animated.spring(translation, {
  //       toValue: 100,
  //       easing: Easing.bounce,
  //       useNativeDriver: true,
  //     }),
  //     Animated.spring(translation, {
  //       toValue: 1,
  //       easing: Easing.bounce,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // }, []);

  // useEffect(() => {
  //   Animated.parallel([
  //     Animated.spring(translation, {
  //       toValue: 1,
  //       easing: Easing.bounce,
  //       useNativeDriver: true,
  //     }),
  //     Animated.spring(translationY, {
  //       toValue: 1,
  //       easing: Easing.bounce,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // }, []);
  return (
    <Animated.View
      style={{
        height: 100,
        width: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'maroon',
        transform:[{scale:translationValue}]
      }}>
      <Text>Square with scaling</Text>
    </Animated.View>
  );
};
export default SquareScale;
