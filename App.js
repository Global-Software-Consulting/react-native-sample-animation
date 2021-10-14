/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
//importing components
import SquareFadeIn from './src/components/SquareFadeIn/index';
import SquareRotate from './src/components/SquareRotate/index';
import SquareScale from './src/components/SquareScale/index';
import SquareScaleWithFriction from './src/components/SquareScaleWithFriction/index';
import SquareAnimated from './src/components/SquareWithAnimated/index';
import Square from './src/components/SquareWithUseEffect/index';
import ReanimatedScaling from './src/components/ReanimatedScaling/index';
import ReanimatedFading from './src/components/ReanimatedFading/index';
import ReanimatedSequence from './src/components/ReanimatedSequence/index';
import ReanimatedWobble from './src/components/ReanimatedWobble/index';
import ReanimatedShake from './src/components/Reanimated Shake/index';
import SVGAnimation from './src/components/SVGAnimation/index';
import CircularButtons from './src/components/CircularButtons';
//----------------------
const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [animationType, setAnimationType] = useState(0);
  const [page, setPage] = useState(0);
  const PageZero = () => {
    return (
      <View style={{alignItems:'center'}}>
        <View style={{alignItems:'center'}}>
          <Image
            source={require('./src/Assets/logo.gif')}
            loop
            style={{width: 200, height: 200}}
          />
        </View>
        <Text style={{fontSize: 20, color:'black'}}>React Native Animation</Text>

        <View style={{margin: 5, width: '60%', borderRadius: 20}}>
          <Button
            title="Fade in"
            onPress={() => {
              setAnimationType(0);
              setIsModalVisible(true);
            }}
          />
        </View>

        <View style={{margin: 5, width: '60%'}}>
          <Button
            title="Rotation"
            onPress={() => {
              setAnimationType(1);
              setIsModalVisible(true);
            }}
          />
        </View>

        <View style={{margin: 5, width: '60%'}}>
          <Button
            title="Scaling"
            onPress={() => {
              setAnimationType(2);
              setIsModalVisible(true);
            }}
          />
        </View>

        <View style={{margin: 5, width: '60%'}}>
          <Button
            title="Scaling with ease out"
            onPress={() => {
              setAnimationType(3);
              setIsModalVisible(true);
            }}
          />
        </View>

        <View style={{margin: 5, width: '60%'}}>
          <Button
            title="Sequential Animation"
            onPress={() => {
              setAnimationType(4);
              setIsModalVisible(true);
            }}
          />
        </View>

        <View style={{margin: 5, width: '60%'}}>
          <Button
            title="Basic animation"
            onPress={() => {
              setAnimationType(5);
              setIsModalVisible(true);
            }}
          />
        </View>
      </View>
    );
  };

  const PageOne = () => {
    return (
      <>
        <View>
          <Image
            source={require('./src/Assets/logo.gif')}
            loop
            style={{width: 200, height: 200}}
          />
        </View>
        <Text style={{fontSize: 20, color:'black'}}>Reanimated 2</Text>
        <View style={{margin: 5, width: '60%'}}>
          <Button
            title="Reanimated 2 Scaling"
            onPress={() => {
              setAnimationType(6);
              setIsModalVisible(true);
            }}
          />
        </View>
        <View style={{margin: 5, width: '60%'}}>
          <Button
            title="Reanimated 2 Fade out"
            onPress={() => {
              setAnimationType(7);
              setIsModalVisible(true);
            }}
          />
        </View>
        <View style={{margin: 5, width: '60%'}}>
          <Button
            title="Reanimated 2 Sequence"
            onPress={() => {
              setAnimationType(8);
              setIsModalVisible(true);
            }}
          />
        </View>
        <View style={{margin: 5, width: '60%'}}>
          <Button
            title="Reanimated 2 Wobble"
            onPress={() => {
              setAnimationType(9);
              setIsModalVisible(true);
            }}
          />
        </View>
        <View style={{margin: 5, width: '60%'}}>
          <Button
            title="Reanimated 2 Shake"
            onPress={() => {
              setAnimationType(10);
              setIsModalVisible(true);
            }}
          />
        </View>
      </>
    );
  };

  const PageThree = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('./src/Assets/logo.gif')}
          loop
          style={{width: 200, height: 200}}
        />
        <Text style={{fontSize: 20, color:'black'}}>SVG animation</Text>
        <SVGAnimation />
      </View>
    );
  };

  const PageFour = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('./src/Assets/logo.gif')}
          loop
          style={{width: 200, height: 200}}
        />
        <Text style={{fontSize: 20, top: 0, color:'black'}}>Circular buttons</Text>
        <View style={{marginVertical:200}}> 
          <CircularButtons />
        </View>
      </View>
    );
  };

  return (
    <Provider>

    <View
      style={{
        backgroundColor: '#F3f2ed',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: 'white',
          width: '95%',
          height: '90%',
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 11,
          },
          shadowOpacity: 0.55,
          shadowRadius: 14.78,

          elevation: 22,
        }}>
        {page === 0 ? (
          <PageZero />
        ) : page === 2 ? (
          <PageThree />
        ) : page === 3 ? (
          <PageFour />
        ) : (
          <PageOne />
        )}
        {page != 3 && (
          <TouchableOpacity
            onPress={() => {
              page === 3 ? setPage(3) : setPage(page + 1);
            }}
            style={{position: 'absolute', bottom: 10, right: 5}}>
            <Text style={{color:'black'}}>Next Page</Text>
          </TouchableOpacity>
        )}
        {page != 0 && (
          <TouchableOpacity
            onPress={() => {
              page === 0 ? setPage(0) : setPage(page - 1);
            }}
            style={{position: 'absolute', bottom: 10, left: 5}}>
            <Text style={{color:'black'}}>Previous Page</Text>
          </TouchableOpacity>
        )}
        </View>
        <Portal>
          <Modal visible={isModalVisible} onDismiss={() => {  setIsModalVisible(!isModalVisible) }}  >
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60%',
            borderRadius: 5,
          }}>
          {animationType === 0 ? (
            <SquareFadeIn />
          ) : animationType === 1 ? (
            <SquareRotate />
          ) : animationType === 2 ? (
            <SquareScale />
          ) : animationType === 3 ? (
            <SquareScaleWithFriction />
          ) : animationType === 4 ? (
            <SquareAnimated />
          ) : animationType === 6 ? (
            <ReanimatedScaling />
          ) : animationType === 7 ? (
            <ReanimatedFading />
          ) : animationType === 8 ? (
            <ReanimatedSequence />
          ) : animationType === 9 ? (
            <ReanimatedWobble />
          ) : animationType === 10 ? (
            <ReanimatedShake />
          ) : (
            <Square />
          )}
        </View>
        <Button
          title="Hide modal"
          style={{bottom: 0}}
          onPress={() => setIsModalVisible(false)}
        />
      </Modal>
      </Portal>
      </View>
      </Provider>

  );
};

export default App;
