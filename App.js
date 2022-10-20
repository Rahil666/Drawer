import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Account from './Navigation/Account';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Hom from './Navigation/Hom';
import Punch from './Navigation/Punch';
import Team from './Navigation/Team';
import Project from './Navigation/Project';

import Announce from './Navigation/Announce';
import Noti from './Navigation/Notifications';
import About from './Navigation/About';

const Rahil = createMaterialBottomTabNavigator();
const Njn = ({navigation}) => (
  <Rahil.Navigator shifting={false}>
    <Rahil.Screen name="Home" component={Hom} />
    <Rahil.Screen name="Punch Details" component={Punch} />
    <Rahil.Screen name="Team" component={Team} />
    <Rahil.Screen name="Project" component={Project} />
  </Rahil.Navigator>
);

const SlideScreen = createDrawerNavigator();
const Wif = () => {
  return (
    <NavigationContainer>
      <SlideScreen.Navigator>
        <SlideScreen.Screen name="Home1" component={Njn} />
        <SlideScreen.Screen name="Announce" component={Announce} />
        <SlideScreen.Screen name="Noti" component={Noti} />
        <SlideScreen.Screen name="About" component={About} />
      </SlideScreen.Navigator>
    </NavigationContainer>
  );
};

export default Wif;

const styles = StyleSheet.create({});
