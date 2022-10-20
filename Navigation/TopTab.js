import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Hom from './Navigation/Hom';
import Punch from './Navigation/Punch';
import Team from './Navigation/Team';
import Project from './Navigation/Project';

const Rahil = createMaterialBottomTabNavigator();
const Njn = ({navigation}) => {
  return (
    <Rahil.Navigator>
      <Rahil.Screen name="Home" component={Hom} />
      <Rahil.Screen name="Punch Details" component={Punch} />
      <Rahil.Screen name="Team" component={Team} />
      <Rahil.Screen name="Project" component={Project} />
    </Rahil.Navigator>
  );
};

export default Njn;

const styles = StyleSheet.create({});
