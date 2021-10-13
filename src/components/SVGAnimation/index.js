import React, {Component} from "react";
import { View } from "react-native";
import { AnimatedSVGPath } from "react-native-svg-animations";
import sampleSVG from './../../Assets/sampleSVG'
const SVGAnimation = () => {

        return (
            <View>
                <AnimatedSVGPath
                    strokeColor={"green"}
                    duration={1000}
                    strokeWidth={5}
                    strokeDashArray={[50.76482137044271, 42.76482137044271]}
                    height={400}
                    width={400}
                    scale={0.75}
                    delay={100}
                    d={sampleSVG}
                    loop={false}
                />
            </View>
        );
        
}
export default SVGAnimation;