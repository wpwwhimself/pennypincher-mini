import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabIcon } from '@/components/pp/Presentation';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transakcje',
          tabBarIcon: () => <TabIcon name="receipt" />,
        }}
      />
      <Tabs.Screen
        name="models"
        options={{
          title: 'Podziały',
          tabBarIcon: () => <TabIcon name="inbox" />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'Ja',
          tabBarIcon: () => <TabIcon name="user" />,
        }}
      />
    </Tabs>
  );
}
