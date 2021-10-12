/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {View, Text, Image, Button} from 'react-native';
import SquareFadeIn from './src/components/SquareFadeIn/index';
import SquareRotate from './src/components/SquareRotate/index';
import SquareScale from './src/components/SquareScale/index';
import SquareScaleWithFriction from './src/components/SquareScaleWithFriction/index';
import SquareAnimated from './src/components/SquareWithAnimated/index';
import Square from './src/components/SquareWithUseEffect/index';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [animationType, setAnimationType] = useState(0);
  return (
    <View
      style={{  backgroundColor:'#F3f2ed', height:'100%', alignItems: 'center', justifyContent:'center',elevation:5}}>
      <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center', backgroundColor: 'white', width: '95%', height: '90%', borderRadius: 20, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 11,
},
shadowOpacity: 0.55,
shadowRadius: 14.78,

elevation: 22, }}>
<View >
      <Image source={require('./src/Assets/logo.gif')} loop style={{width:200, height:200}} />
    </View>
      <Text style={{ fontSize: 20 }}>React Native Animation</Text>
      <View style={{margin: 5, width:'60%', borderRadius:20}}>
      <Button title="Fade in"  onPress={() => { setAnimationType(0); setIsModalVisible(true) }} />
      </View>

      <View style={{margin: 5,width:'60%'}}>
        <Button title="Rotation" onPress={() => { setAnimationType(1); setIsModalVisible(true) }} />
      </View>

      <View style={{margin: 5,width:'60%'}}>
        <Button title="Scaling" onPress={() => { setAnimationType(2); setIsModalVisible(true) }} />
      </View>

      <View style={{margin: 5,width:'60%'}}>
        <Button title="Scaling with ease out" onPress={() => { setAnimationType(3); setIsModalVisible(true) }} />
      </View>

      <View style={{margin: 5,width:'60%'}}>
        <Button title="Sequential Animation" onPress={() => { setAnimationType(4); setIsModalVisible(true) }} />
      </View>

      <View style={{margin: 5,width:'60%'}}>
        <Button title="Basic animation" onPress={() => { setAnimationType(5); setIsModalVisible(true) }} />
      </View>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={{ backgroundColor: 'white', alignItems:'center', justifyContent:'center', height:'40%', borderRadius:5 }}>
          {animationType===0 ? ( 
            <SquareFadeIn /> ) : animationType === 1 ? (<SquareRotate />) : animationType === 2 ? (<SquareScale />) :
              animationType === 3 ? (<SquareScaleWithFriction />) : animationType === 4 ? (<SquareAnimated />) :
              (<Square />)
          }
        </View>
        <Button title="Hide modal" style={{position:'absolute', bottom:0}} onPress={()=> setIsModalVisible(!isModalVisible)} />

      </Modal>

     
    </View>
  );
};

export default App;
