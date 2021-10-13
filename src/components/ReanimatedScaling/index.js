import React from 'react';
import { TouchableOpacity , Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
const ReanimatedScaling = () => {
  // just like we use useState
  const randomNumber = useSharedValue(100);

  //styling using re-animated
  const style = useAnimatedStyle(() => {
    return {
      width: randomNumber.value,
      height: randomNumber.value,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
    };
  });
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          randomNumber.value = withSpring(Math.random() * 350);
        }}>
        <Animated.View style={style}>
          <Text>Size mutation using Reanimated</Text>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};
export default ReanimatedScaling;
