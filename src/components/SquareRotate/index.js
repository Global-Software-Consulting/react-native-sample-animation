import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Text, Easing} from 'react-native';

const SquareRotate = () => {
  let repeat = 0;

  const translation = new Animated.Value(0)
  const translationValue =  translation.interpolate ({
    inputRange :  [ 0, 1 ],
    outputRange :  [ '0deg', '360deg' ]
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
        backgroundColor: 'pink',
        transform:[{rotate:translationValue}]
      }}>
      <Text>Square with Rotation</Text>
    </Animated.View>
  );
};
export default SquareRotate;
