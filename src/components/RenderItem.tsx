import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Data} from '../data/data';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';

type Props = {
    item: Data;
    index: number
}

const RenderItem = ({item, index}: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
    <Pressable 
        style={styles.container}
        onPress={() => {
            navigation.navigate("Detail", {item: item})
        }}>
      <Animated.Image 
        source={item.image} 
        style={styles.image}
        sharedTransitionTag={item.name}/>
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textLocation}>{item.location}</Text>
      </View>
    </Pressable>
    </Animated.View>
  )
}

export default RenderItem

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    image:{
        width: 140,
        height: 140,
        borderRadius: 10
    },
    textContainer:{
        margin: 20,
        gap: 10,
        flexShrink: 1
    },
    textName:{
        color: '#323232',
        fontSize: 28,
        fontWeight: 'bold',
    },
    textLocation:{
        color: '#323232',
        fontSize: 18,

    }
})