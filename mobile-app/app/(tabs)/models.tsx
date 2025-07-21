import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Button } from '@react-native-material/core';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabTwoScreen() {
  const colors = {
    light: '#7cce86ff',
    dark: '#2c541bff',
  };
  const color = useThemeColor(colors, "tint");

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="inbox"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Podziały</ThemedText>
      </ThemedView>
      <ThemedText>Tutaj zdefiniujesz konta i kategorie transakcji.</ThemedText>

      <ThemedView style={styles.titleContainer}>
        <IconSymbol name="account-balance" size={24} color="#808080" />
        <ThemedText type="subtitle">Konta</ThemedText>
      </ThemedView>

      <Button
        title="Nowe konto"
        leading={<IconSymbol name="add" size={24} color="#808080" />}
        color={color}
      />

      <ThemedView style={styles.titleContainer}>
        <IconSymbol name="inbox" size={24} color="#808080" />
        <ThemedText type="subtitle">Kategorie</ThemedText>
      </ThemedView>

      <Button
        title="Nowa kategoria"
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
});
