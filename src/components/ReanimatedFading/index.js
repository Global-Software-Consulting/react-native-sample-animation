import React from 'react';
import { TouchableOpacity , Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDecay,
  withTiming
} from 'react-native-reanimated';
const ReanimatedFading = () => {
  // just like we use useState
  const opacity = useSharedValue(1);

  //styling using re-animated
  const style = useAnimatedStyle(() => {
    return {
      width: 100,
      height: 100,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
      opacity:opacity.value
    };
  });
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          opacity.value = withTiming(0,{duration:2000});
        }}>
        <Animated.View style={style}>
          <Text>Press to fade out</Text>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};
export default ReanimatedFading;
