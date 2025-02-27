import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator'
import Animated, { FadeIn } from 'react-native-reanimated'

type Props = {}

const Header = (props: Props) => {
    const inset = useSafeAreaInsets()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <Animated.View 
        entering={FadeIn.delay(400)}
        style={[styles.container, {top: Platform.OS === "ios" ? inset.top : 20}]}>
        <Pressable  onPress={() => {navigation.goBack()}}>
      <Image source={require('../assets/chevron.png')} style={styles.chevron}/>
      </Pressable>
      <Image source={require('../assets/like.png')} style={styles.chevron}/>
    </Animated.View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 20,
        right: 20
    },
    chevron:{
        height: 44,
        width: 44
    }
})