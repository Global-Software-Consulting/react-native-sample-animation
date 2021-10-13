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
const ReanimatedShake = () => {
  // just like we use useState
  const horizontal = useSharedValue(1);
  const vertical = useSharedValue(1);

  //styling using re-animated
  const style = useAnimatedStyle(() => {
    return {
      width: 100,
      height: 100,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
      transform: [{translateX: horizontal.value}],
    };
  });
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          horizontal.value = withRepeat(
            withTiming(5, {duration: 50}),8,true,
          );
        }}>
        <Animated.View style={style}>
          <Text>Press to animate</Text>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};
export default ReanimatedShake;
