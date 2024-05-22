/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../config/COLORS';
import Home from '../screens/Home';
import Basket from '../screens/Basket';
import {TouchableOpacity, View} from 'react-native';
import HomeTabIcon from '../assets/HomeTabIcon';
import BasketTabIcon from '../assets/BasketTabIcon';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const BasketStack = createStackNavigator();

const RootNavigator = () => {
  function HomeTab() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
      </HomeStack.Navigator>
    );
  }

  function BasketTab() {
    return (
      <BasketStack.Navigator>
        <BasketStack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Basket}
        />
      </BasketStack.Navigator>
    );
  }

  function MyTabBar({state, descriptors, navigation}) {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
          justifyContent: 'space-between',
          paddingTop: 20,
          borderTopWidth: 1,
          borderColor: '#E3E8EF',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={label}
              hitSlop={{top: 10, left: 5, bottom: 5, right: 5}}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={1}
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              {label === 'HomeTab' && (
                <HomeTabIcon
                  stroke={isFocused ? '#9AA4B2' : '#6C737F'}
                  fill={isFocused ? '#9AA4B2' : '#6C737F'}
                />
              )}

              {label === 'BasketTab' && (
                <BasketTabIcon
                  stroke={isFocused ? '#9AA4B2' : '#6C737F'}
                  fill={isFocused ? '#9AA4B2' : '#6C737F'}
                />
              )}
              {isFocused && (
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: isFocused ? '#9AA4B2' : '#6C737F',
                    marginTop: 5,
                    borderRadius: 5,
                  }}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <NavigationContainer>
      <SafeAreaView
        edges={['bottom']}
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
        <Tab.Navigator
          tabBar={props => <MyTabBar {...props} />}
          initialRouteName="HomeTab"
          screenOptions={() => ({
            unmountOnBlur: true,
            unmountInactiveRoutes: true,
            headerShown: false,
            tabBarStyle: {
              height: 50,
              paddingBottom: 0,
              borderTopWidth: 0,
            },
          })}>
          <Tab.Screen name="HomeTab" component={HomeTab} />
          <Tab.Screen name="BasketTab" component={BasketTab} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigator;
