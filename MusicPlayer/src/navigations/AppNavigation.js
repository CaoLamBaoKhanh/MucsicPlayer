import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MusicList from '../components/Screen/MusicList';
import Player from '../components/Screen/Player';
import PlayList from '../components/Screen/PlayList';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default  AppNavigation = ()=>{

  return (
      <Tab.Navigator>
        <Tab.Screen name="Music" component={MusicList} 
          options={{
            tabBarIcon:({color, size})=>{
              return <Ionicons name="headset" size={size} color={color} />
            },
          }}
        />
        <Tab.Screen name="Player" component={Player} 
         options={{
          tabBarIcon:({color, size})=>{
            return <FontAwesome5 name="compact-disc" size={size} color={color} />
          },
        }}/>
        <Tab.Screen name="PlayList" component={PlayList}  options={{
          tabBarIcon:({color, size})=>{
            return <FontAwesome name="list-ul" size={size} color={color} />
          },
        }}/>
      </Tab.Navigator>

    
  );
}