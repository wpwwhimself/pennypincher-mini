import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Button, TextInput } from '@react-native-material/core'
import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabTwoScreen() {
  const colors = {
    light: '#c57cceff',
    dark: '#7d2c88ff',
  };
  const color = useThemeColor(colors, "tint");

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="person"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ja</ThemedText>
      </ThemedView>
      <ThemedText>Podaj dane do logowania do API.</ThemedText>
      <TextInput
        label="Adres serwera"
        variant="standard"
        leading={<IconSymbol name="computer" size={24} color="#808080" />}
        color={color}
        inputMode="url"
      />
      <TextInput
        label="Nazwa użytkownika"
        variant="standard"
        leading={<IconSymbol name="person" size={24} color="#808080" />}
        color={color}
      />
      <TextInput
        label="Hasło"
        variant="standard"
        leading={<IconSymbol name="key" size={24} color="#808080" />}
        color={color}
        secureTextEntry={true}
        autoComplete="password"
      />
      <Button
        title="Zapisz"
        leading={<IconSymbol name="save" size={24} color="#808080" />}
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
    gap: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
