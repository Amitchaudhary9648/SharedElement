import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from '../data/data'
import RenderItem from '../components/RenderItem'


type Props = {}

const Home = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Popular Destinations</Text>
      <FlatList 
        data={[...data, ...data]}
        renderItem={({item, index}) => {
            return <RenderItem item={item} index={index}/>
        }}/>
        
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    text:{
        fontSize: 34,
        marginHorizontal: 20,
        color: "#323232",
        fontWeight: 'bold'
    }
})