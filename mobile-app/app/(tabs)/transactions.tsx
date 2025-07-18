import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Button } from '@react-native-material/core';

export default function HomeScreen() {
  const colors = {
    light: '#A1CEDC',
    dark: '#1D3D47',
  };
  const color = useThemeColor(colors, "tint");

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="library-books"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Transakcje</ThemedText>
      </ThemedView>

      <Button
        title="Nowa transakcja"
        leading={<IconSymbol name="add" size={24} color="#808080" />}
        color={color}
      />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
