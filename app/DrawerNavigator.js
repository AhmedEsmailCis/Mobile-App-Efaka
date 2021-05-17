import * as React from 'react';
import {View, Image, Dimensions, BackHandler} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './screens/Home';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={Home} />
    </Drawer.Navigator>
  );
}
function CustomDrawerContent(props) {
  return (
    <View></View>
  );
}
