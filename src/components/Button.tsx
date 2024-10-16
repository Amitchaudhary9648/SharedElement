import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Animated, { FadeIn } from 'react-native-reanimated'

const Button = () => {
    const {width} = useWindowDimensions()
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
  return (
    <AnimatedPressable 
        entering={FadeIn.delay(1000)}
        onPress={() => {console.log("Booking")}}
        style={[styles.container, {width: width * 0.9}]}>
      <Text style={styles.text}>Booking Now</Text>
    </AnimatedPressable>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1c6cce',
        padding: 22,
        alignItems: 'center',
        borderRadius: 40,
        marginBottom: 20,
    },
    text:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})