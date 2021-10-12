import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Text, Easing} from 'react-native';

const SquareScaleWithFriction = () => {

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
       Animated.spring(translation, {
        toValue: 1,
         easing: Easing.bounce,
        friction:1,
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
        backgroundColor: 'black',
        transform:[{scale:translationValue}]
      }}>
      <Text style={{color:'white'}}>Square with scaling and friction together</Text>
    </Animated.View>
  );
};
export default SquareScaleWithFriction;
