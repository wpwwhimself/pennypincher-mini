import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Button } from '@/components/pp/UI';
import { useThemeColor } from '@/hooks/useThemeColor';
import { HeaderIcon } from '@/components/pp/Presentation';

export default function TabTwoScreen() {
  const colors = {
    light: '#46eb5aff',
    dark: '#6dd179ff',
  };
  const color = useThemeColor(colors, "tint");

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={<HeaderIcon name="inbox" />}>
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
        iconName="add"
        color={color}
      />

      <ThemedView style={styles.titleContainer}>
        <IconSymbol name="inbox" size={24} color="#808080" />
        <ThemedText type="subtitle">Kategorie</ThemedText>
      </ThemedView>

      <Button
        title="Nowa kategoria"
        iconName="add"
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
});
