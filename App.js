import React from 'react'
import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import Locations from './model/locations';

const App = () => {
   const { width: windowWidth, height: windowHeight } = useWindowDimensions()
  return (
    <>
      <StatusBar barStyle='light-content' />
      <ScrollView horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false}>
          {Locations.map((location, index) => {
              if( location.weatherType == 'Sunny') {
                bgImg = require('./assets/sunny.jpg');
              } else if ( location.weatherType == 'Night') {
                bgImg = require('./assets/night2.jpg');
              } else if ( location.weatherType == 'Cloudy') {
                bgImg = require('./assets/cloudy.jpeg');
              } else if ( location.weatherType == 'Rainy') {
                bgImg = require('./assets/rainy.jpg');
              }

              return(
                <View 
                     style={{ width: windowWidth, height: windowHeight}} 
                      key={index}>
                    <ImageBackground source={bgImg} style={{ flex: 1 }}>
                        <View 
                           style={{
                             backgroundColor: 'rgba(0,0,0,0.3)', 
                             padding: 20,
                             justifyContent:'center', 
                             alignItems: 'center'
                           }}>
                           <Text style={{ color: 'white' }} >{location.city} </Text>
                        </View>
                    </ImageBackground>
                </View>
              );
          })}
      </ScrollView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
