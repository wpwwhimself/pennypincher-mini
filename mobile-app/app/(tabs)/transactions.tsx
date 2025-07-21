import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Button } from '@react-native-material/core';
import HeaderIcon from '@/components/pp/HeaderIcon';

export default function HomeScreen() {
  const colors = {
    light: '#9bd7ffff',
    dark: '#82b4d5ff',
  };
  const color = useThemeColor(colors, "tint");

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={<HeaderIcon name="library-books" />}>
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
