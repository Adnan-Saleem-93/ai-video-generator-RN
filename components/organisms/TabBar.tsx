import React from 'react'
import {Tabs} from 'expo-router'
import TabBarIcon from '@/components/molecules/TabBarButton'
import {icons} from '../../constants'

const TabBar = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FF9C01',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            height: 76,
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232500'
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabBarIcon name="Home" color={color} focused={focused} icon={icons.home} />
            )
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: 'Saved',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabBarIcon name="Saved" color={color} focused={focused} icon={icons.bookmark} />
            )
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabBarIcon name="Create" color={color} focused={focused} icon={icons.plus} />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabBarIcon name="Profile" color={color} focused={focused} icon={icons.profile} />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabBar
