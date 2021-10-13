import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDecay,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
const ReanimatedWobble = () => {
  // just like we use useState
  const AlongZ = useSharedValue(1);

  //styling using re-animated
  const style = useAnimatedStyle(() => {
    return {
      width: 100,
      height: 100,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
      transform: [{rotateZ: `${(AlongZ.value)}deg`}],
    };
  });
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          AlongZ.value = withRepeat(
            withTiming(20, {duration: 1000}),6,true
          );
        }}>
        <Animated.View style={style}>
          <Text>Press to animate</Text>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};
export default ReanimatedWobble;
