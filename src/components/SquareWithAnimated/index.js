import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Text, Easing} from 'react-native';

const SquareAnimated = () => {
  let repeat = 0;

  const translation = useRef(new Animated.Value(0)).current;
  const translationY = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   for (let i = 0; i < 50; i++) {
  //     setTimeout(() => {
  //       translation.setValue(i);
  //     }, 25 * i);
  //   }
  // }, []);
  // useEffect(() => {
  //   Animated.timing(translation, {
  //     toValue: 100,
  //     easing: Easing.bounce,
  //     useNativeDriver: true,
  //   }).start();
  // }, []);

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

  useEffect(() => {
    Animated.sequence([
      Animated.spring(translation, {
        toValue: 100,
        delay:500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.spring(translationY, {
        toValue: 70,
        delay:500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  return (
    <Animated.View
      style={{
        height: 100,
        width: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'red',
        transform: [{translateY: translationY}, {translateX: translation}],
      }}>
      <Text>Square with animated</Text>
    </Animated.View>
  );
};
export default SquareAnimated;
