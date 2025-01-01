import { StatusBar } from 'expo-status-bar';
import React, { useState } from'react';
import PagerView from 'react-native-pager-view';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import convert from 'convert-units';
import constants from 'expo-constants';

const measures= convert().measures()
const mainColor = '#052F5F';

const Measureview=({measure}) => <text>{measure}</text>

export default function App() {
  const[index, setIndex]=useState(0)
  cont[route]=useState(measures.map((m) => ({ key: m, title: m })))
  
  const renderScene = ({route})=>{
    return <Measureview measure={route.key} />
  }
  return (
    <View style={[styles.scene,{marginTop: constants.statusBarHeight}]}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
        renderTabBar={(props) => (
          <TabBar{...props} 
          scrollEnabled 
          tabStyle={{ width: 'auto'}} 
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{backgroundColor: mainColor}} 
          />
        )}
      ></TabView>
    </View>
  );
}

const styles = StyleSheet.create({
  Scene: {
    flex: 1,
  },
});
